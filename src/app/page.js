"use client";
import { CharacterEmblem, AbilityAndSkill } from '@/pages-old/root/imports';

export default function Root() {
  return (
    <div id="rootElement" data-testid="rootElement">
      <CharacterEmblem />
      <AbilityAndSkill />
    </div>
  );
}
