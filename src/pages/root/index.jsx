import {
  SkillsList,
  AbilityList,
  AbilityScore,
  FlexDiv 
} from './imports';

export function Root () {
  return (
    <FlexDiv padding="20px 5px" id='root' data-testid="root">
      <FlexDiv column center>
        <AbilityScore type='proficiency' displayScore />
        <AbilityList />
      </FlexDiv>
      <SkillsList />
    </FlexDiv>
  );
}
