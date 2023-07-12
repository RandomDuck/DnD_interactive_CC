import {
  SkillsList,
  AbilityList,
  FlexDiv 
} from './imports';

export function AbilityAndSkill () {
  return (
    <div>
      <FlexDiv padding="20px 5px" id='AbilityAndSkill' data-testid="AbilityAndSkill">
        <FlexDiv column center>
          <AbilityList />
        </FlexDiv>
        <SkillsList />
      </FlexDiv>
    </div>
  );
}
