"use client";
import { AbilityAndSkill } from '@/modules/abilitys-and-skills';
import { CharacterEmblem } from '@/modules/character-emblem';

export default function Root() {
  return (
    <div id="rootElement" data-testid="rootElement">
      <CharacterEmblem />
      <AbilityAndSkill combinedStyle />
    </div>
  );
}
