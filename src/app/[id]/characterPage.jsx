"use client";

import React, { useMemo, useRef, useCallback, useEffect, use } from "react";
import { Provider, createStore, useAtom } from "jotai";

import { imageSrcAtom } from "@/atoms/chatacter-image-atom";
import { chekboxList } from "@/atoms/checkbox-atoms";
import { dropdownList as dropdownListAtom } from "@/atoms/dropdown-atoms";
import { currentHp, currentTempHp, maxHp } from "@/atoms/health-bar-atom";
import { classLevels, totalLevel } from "@/atoms/level-atom";
import { getModifierAtom } from "@/atoms/modifier-atoms";

import { AbilityAndSkill } from "@/modules/abilitys-and-skills";
import { CharacterEmblem } from "@/modules/character-emblem";

/** Debounced POST that never fires on load (baseline on first enable) */
export function useDebouncedPost(data, delay = 3000, enabled = true) {
  const json = useMemo(() => JSON.stringify(data), [data]);
  const ready = useRef(false);
  const lastSent = useRef(null);
  const timer = useRef(null);

  const sendNow = useCallback(async () => {
    if (!enabled) return;
    if (!ready.current) {
      // establish baseline on first enable; don't post
      lastSent.current = json;
      ready.current = true;
      return;
    }
    if (json === lastSent.current) return;

    try {
      await fetch("/api/character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      });
      lastSent.current = json;
    } catch (e) {
      // swallow on unload contexts
      console.error(e);
    }
  }, [enabled, json]);

  // Debounce logic
  useEffect(() => {
    if (!enabled) return;
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      void sendNow();
    }, delay);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [delay, enabled, json, sendNow]);

  // Expose a flush() to send immediately
  const flush = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    void sendNow();
  }, [sendNow]);

  return { flush };
}

export function usePostOnUnload(getLatestJson, url = "/api/character") {
  useEffect(() => {
    const send = () => {
      const json = getLatestJson();
      // Prefer sendBeacon (non-blocking, allowed during unload)
      if (navigator.sendBeacon) {
        const blob = new Blob([json], { type: "application/json" });
        navigator.sendBeacon(url, blob);
      } else {
        // Fallback: sync XHR is deprecated; best-effort fetch with keepalive
        try {
          fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: json,
            keepalive: true, // important for unload contexts
          });
        } catch { }
      }
    };

    // Fire when tab is backgrounded or about to unload
    const onVis = () => {
      if (document.visibilityState === "hidden") send();
    };
    const onPageHide = () => send();
    const onBeforeUnload = () => send();

    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pagehide", onPageHide);
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", onPageHide);
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [getLatestJson, url]);
}

/** Capture your modifier atoms once and reuse them (no changes to atom code) */
function useModAtomRefs() {
  const modAtoms = useMemo(() => {
    const keys = ["str", "dex", "con", "wis", "int", "chr", "prof", "spd", "ac", "init"];
    const obj = {};
    for (const k of keys) obj[k] = getModifierAtom(k);
    return obj;
  }, []); // called once; same atom instances reused everywhere in this component
  return modAtoms;
}

function CharacterContent({ id, modAtoms }) {
  // read base atoms
  const [imageSrc] = useAtom(imageSrcAtom);
  const [checkList] = useAtom(chekboxList);
  const [dropdownList] = useAtom(dropdownListAtom);
  const [hp] = useAtom(currentHp);
  const [totHp_] = useAtom(maxHp);
  const [tempHp] = useAtom(currentTempHp);
  const [totLevel_] = useAtom(totalLevel);
  const [classLevel_] = useAtom(classLevels);

  // read your modifiers using the same captured atom instances
  const [str] = useAtom(modAtoms.str);
  const [dex] = useAtom(modAtoms.dex);
  const [con] = useAtom(modAtoms.con);
  const [wis] = useAtom(modAtoms.wis);
  const [int_] = useAtom(modAtoms.int);
  const [chr] = useAtom(modAtoms.chr);
  const [prof] = useAtom(modAtoms.prof);
  const [spd] = useAtom(modAtoms.spd);
  const [ac] = useAtom(modAtoms.ac);
  const [init] = useAtom(modAtoms.init);

  const characterData = useMemo(
    () => ({
      id,
      imageSrc,
      chekList: checkList,
      dropdownList: dropdownList,
      Hp: hp,
      totHp: totHp_,
      TempHp: tempHp,
      totLevel: totLevel_,
      classLevel: classLevel_,
      mod: { str, dex, con, wis, int: int_, chr, prof, spd, ac, init },
    }),
    [
      id,
      imageSrc,
      checkList,
      dropdownList,
      hp,
      totHp_,
      tempHp,
      totLevel_,
      classLevel_,
      str,
      dex,
      con,
      wis,
      int_,
      chr,
      prof,
      spd,
      ac,
      init,
    ]
  );

  const dataJson = useMemo(() => JSON.stringify(characterData), [characterData])

  const { flush } = useDebouncedPost(characterData, 1000, true);

  // On unload, first flush (to align lastSent baseline), then beacon
  usePostOnUnload(() => {
    flush();            // ensure pending debounce is sent (or baseline set)
    return dataJson;    // send the latest snapshot via sendBeacon/keepalive
  });

  return (
    <div id="rootElement" data-testid="rootElement">
      <CharacterEmblem />
      <AbilityAndSkill combinedStyle />
    </div>
  );
}

export default function CharacterPageClient({ id, serverData }) {
  const data = use(serverData)
  const p = data.data;
  // Capture your modifier atom instances once (no modification to their implementation)
  const modAtoms = useModAtomRefs();

  // Seed a fresh store synchronously for this id (no timing race)
  const store = useMemo(() => {
    const s = createStore();

    // base atoms
    s.set(imageSrcAtom, p.imageSrc ?? null);
    s.set(chekboxList, p.chekList ?? {});
    s.set(dropdownListAtom, p.dropdownList ?? {});
    s.set(currentHp, p.Hp ?? 0);
    s.set(maxHp, p.totHp ?? 0);
    s.set(currentTempHp, p.TempHp ?? 0);
    s.set(totalLevel, p.totLevel ?? 1);
    s.set(classLevels, p.classLevel ?? {});

    // modifier atoms — use the same captured instances
    s.set(modAtoms.str, p?.mod?.str ?? 10);
    s.set(modAtoms.dex, p?.mod?.dex ?? 10);
    s.set(modAtoms.con, p?.mod?.con ?? 10);
    s.set(modAtoms.wis, p?.mod?.wis ?? 10);
    s.set(modAtoms.int, p?.mod?.int ?? 10);
    s.set(modAtoms.chr, p?.mod?.chr ?? 10);
    s.set(modAtoms.prof, p?.mod?.prof ?? 2);
    s.set(modAtoms.spd, p?.mod?.spd ?? 30);
    s.set(modAtoms.ac, p?.mod?.ac ?? 12);
    s.set(modAtoms.init, p?.mod?.init ?? 0);

    return s;
  }, [id, p, modAtoms]); // remount store when id or payload changes

  return (
    <Provider key={id} store={store}>
      <CharacterContent id={id} modAtoms={modAtoms} />
    </Provider>
  );
}
