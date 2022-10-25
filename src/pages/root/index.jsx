import { SkillsList, AbilityList, AbilityScore } from './imports';

export function Root () {
  return (
    <div id='root' data-testid="root">
      <AbilityScore type='proficiency' displayScore /><br />
      <AbilityList />
      <SkillsList />
    </div>
  );
}
