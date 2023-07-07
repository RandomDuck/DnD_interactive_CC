import {
  SkillsList,
  AbilityList,
  AbilityScore,
  FlexDiv 
} from './imports';

export function AbilityAndSkill () {
  return (
    <div>
      <FlexDiv padding="20px 5px" id='AbilityAndSkill' data-testid="AbilityAndSkill">
        <FlexDiv column center>
          <AbilityScore type='proficiency' displayScore />
          <AbilityList />
        </FlexDiv>
        <SkillsList />
      </FlexDiv>
    </div>
  );
}
