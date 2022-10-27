import {
  SkillsList,
  AbilityList,
  AbilityScore,
  FlexDiv 
} from './imports';
import { CharacterImg } from 'components/caharacter-image';

export function Root () {
  return (
    <div>
      <CharacterImg isUploadable/>
      <FlexDiv padding="20px 5px" id='root' data-testid="root">
        <FlexDiv column center>
          <AbilityScore type='proficiency' displayScore />
          <AbilityList />
        </FlexDiv>
        <SkillsList />
      </FlexDiv>
    </div>
  );
}
