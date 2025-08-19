"use client";
import { CharacterEmblem, AbilityAndSkill } from '@/app/(root)/imports';

export default function Root() {
  return (
    <div id="rootElement" data-testid="rootElement">
      <CharacterEmblem />
      <AbilityAndSkill combinedStyle />
    </div>
  );
}
