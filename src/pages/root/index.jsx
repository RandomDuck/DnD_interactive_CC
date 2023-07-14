import { CharacterEmblem, AbilityAndSkill } from './imports';

export function Root() {
  return (
    <div id="root" data-testid="root">
      <CharacterEmblem />
      <AbilityAndSkill />
    </div>
  );
}
