import { act, render, screen } from "@testing-library/react"
import React, { Suspense } from "react"
import CharacterPageClient from "../characterPage"

function makeServerData() {
  return Promise.resolve({
    data: {
      imageSrc: "http://example.com/img.png",
      chekList: {},
      Hp: 12,
      totHp: 20,
      TempHp: 1,
      totLevel: 3,
      classLevel: { fighter: 3 },
      mod: {
        str: 15,
        dex: 14,
        con: 13,
        wis: 12,
        int: 11,
        chr: 10,
        prof: 2,
        spd: 30,
        ac: 16,
        init: 1,
      },
    },
  })
}

it("renders the root element", async () => {
  await act(async () => {
    render(
      <Suspense fallback={<div>loading…</div>}>
        <CharacterPageClient id="alpha" serverData={makeServerData()} />
      </Suspense>
    )
  });
  expect(await screen.findByTestId("rootElement")).toBeInTheDocument();
})
