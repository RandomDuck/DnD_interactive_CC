import { CharacterEmblem, AbilityAndSkill } from './imports';

export function Root() {
  return (
    <div id="rootElement" data-testid="rootElement">
      <CharacterEmblem />
      <AbilityAndSkill />
    </div>
  );
}
