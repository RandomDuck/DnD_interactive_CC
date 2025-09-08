"use client";

import React, { useMemo, useRef, useEffect, use } from "react";
import { Provider, createStore, useAtom } from "jotai";

import { imageSrcAtom } from "@/atoms/chatacter-image-atom";
import { chekboxList } from "@/atoms/checkbox-atoms";
import { currentHp, currentTempHp, maxHp } from "@/atoms/health-bar-atom";
import { classLevels, totalLevel } from "@/atoms/level-atom";
import { getModifierAtom } from "@/atoms/modifier-atoms";

import { AbilityAndSkill } from "@/modules/abilitys-and-skills";
import { CharacterEmblem } from "@/modules/character-emblem";

/** Debounced POST that never fires on load (baseline on first enable) */
function useDebouncedPost(data, delay = 3000, enabled = true) {
  const json = useMemo(() => JSON.stringify(data), [data]);
  const ready = useRef(false);
  const lastSent = useRef(null);

  useEffect(() => {
    if (!enabled) return;

    if (!ready.current) {
      lastSent.current = json; // establish baseline on first enable
      ready.current = true;
      return;
    }
    if (json === lastSent.current) return;
    const t = setTimeout(async () => {
      await fetch("/api/character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: json,
      });
      lastSent.current = json;
    }, delay);

    return () => clearTimeout(t);
  }, [json, delay, enabled]);
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

  // Start enabled immediately; baseline prevents initial POST
  useDebouncedPost(characterData, 1000, true);

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
