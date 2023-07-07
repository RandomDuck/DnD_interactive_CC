import {
  SkillsList,
  AbilityList,
  AbilityScore,
  FlexDiv 
} from './imports';
import { CharacterImg } from 'components/caharacter-image';
import { StatusBar } from 'components/status-bar';
import { currentHp, maxHp } from 'atoms/health-bar-atom';

export function Root () {
  return (
    <div>
      <CharacterImg isUploadable/>
      <StatusBar internalButtons maxConfig={maxHp} label="Health" color={{ positive: '#c00', negative: '#700', text: '#0a0'}} config={currentHp} />
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
