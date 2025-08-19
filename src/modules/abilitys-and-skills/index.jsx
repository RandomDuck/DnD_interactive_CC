import {
  CombinedList,
  SavingThrows,
  SkillsList,
  AbilityList,
  FlexDiv
} from './imports';

export function AbilityAndSkill({ $column = false, combinedStyle = false, $split = 1 }) {
  if (combinedStyle) {
    return <CombinedList $column={$column} $split={$split} id='AbilityAndSkill' data-testid="AbilityAndSkill" />;
  }
  return (
    <div>
      <FlexDiv padding="20px 5px" id='AbilityAndSkill' data-testid="AbilityAndSkill">
        <FlexDiv $column $center>
          <SavingThrows />
          <AbilityList />
        </FlexDiv>
        <SkillsList />
      </FlexDiv>
    </div>
  );
}
