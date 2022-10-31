import {
  SkillsList,
  AbilityList,
  AbilityScore,
  FlexDiv 
} from './imports';
import { CharacterImg } from 'components/caharacter-image';
import { StatusBar } from 'components/status-bar';

export function Root () {
  return (
    <div>
      <CharacterImg isUploadable/>
      <StatusBar label="health" color={{ positive: '#c00', negative: '#700'}} max={50} />
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
