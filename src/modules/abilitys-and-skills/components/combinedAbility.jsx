import { CombinedWrapper, CombinedSkillUL, CombinedAbilityWrapper, SplitDiv } from '../resources/componentStyle';
import { CombinedFlexDiv } from '../resources/indexStyle';
import { SkillItem } from '@/components/skill-item';
import { AbilityScore } from '@/components/ability-score';

const CombinedStrength = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedStrength' data-testid="combinedStrength">
      <CombinedAbilityWrapper>
        <AbilityScore type='strength' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='str' name='strength save' size='m' />
        <SkillItem showAtr={false} type='str' name='acrobatics' size='m' />
        <SkillItem showAtr={false} type='str' name='athletics' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}

const CombinedDexterity = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedDexterity' data-testid="combinedDexterity">
      <CombinedAbilityWrapper>
        <AbilityScore type='dexterity' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='dex' name='dexterity save' size='m' />
        <SkillItem showAtr={false} type='dex' name='sleight of hand' size='m' />
        <SkillItem showAtr={false} type='dex' name='stealth' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}
const CombinedConstitution = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedConstitution' data-testid="combinedConstitution">
      <CombinedAbilityWrapper>
        <AbilityScore type='constitution' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='con' name='constitution save' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}

const CombinedIntelligance = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedIntelligance' data-testid="combinedIntelligance">
      <CombinedAbilityWrapper>
        <AbilityScore type='intelligence' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='int' name='intelligence save' size='m' />
        <SkillItem showAtr={false} type='int' name='arcana' size='m' />
        <SkillItem showAtr={false} type='int' name='history' size='m' />
        <SkillItem showAtr={false} type='int' name='investigation' size='m' />
        <SkillItem showAtr={false} type='int' name='nature' size='m' />
        <SkillItem showAtr={false} type='int' name='religion' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}

const CombinedWisdom = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedWisdom' data-testid="combinedWisdom">
      <CombinedAbilityWrapper>
        <AbilityScore type='wisdom' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='wis' name='wisdom save' size='m' />
        <SkillItem showAtr={false} type='wis' name='animal handling' size='m' />
        <SkillItem showAtr={false} type='wis' name='insight' size='m' />
        <SkillItem showAtr={false} type='wis' name='medicine' size='m' />
        <SkillItem showAtr={false} type='wis' name='perception' size='m' />
        <SkillItem showAtr={false} type='wis' name='survival' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}

const CombinedCharisma = ({ $column, $split }) => {
  return (
    <CombinedWrapper $column={$column} $split={$split} id='combinedCharisma' data-testid="combinedCharisma">
      <CombinedAbilityWrapper>
        <AbilityScore type='charisma' />
      </CombinedAbilityWrapper>
      <CombinedSkillUL>
        <SkillItem showAtr={false} type='chr' name='charisma save' size='m' />
        <SkillItem showAtr={false} type='chr' name='deception' size='m' />
        <SkillItem showAtr={false} type='chr' name='intimidation' size='m' />
        <SkillItem showAtr={false} type='chr' name='performance' size='m' />
        <SkillItem showAtr={false} type='chr' name='persuasion' size='m' />
      </CombinedSkillUL>
    </CombinedWrapper>
  )
}


const CombinedList = ({ $column = false, $split = 1 }) => {
  const list = [
    <CombinedStrength $column={$column} $split={$split > 1} key={'CombinedStrength'} />,
    <CombinedDexterity $column={$column} $split={$split > 1} key={'CombinedDexterity'} />,
    <CombinedConstitution $column={$column} $split={$split > 1} key={'CombinedConstitution'} />,
    <CombinedIntelligance $column={$column} $split={$split > 1} key={'CombinedIntelligance'} />,
    <CombinedWisdom $column={$column} $split={$split > 1} key={'CombinedWisdom'} />,
    <CombinedCharisma $column={$column} $split={$split > 1} key={'CombinedCharisma'} />
  ];
  const numGroups = $split > list.length ? list.length : $split;

  const getsplitList = () => {
    let newList = [];
    for (let i = 0; i < list.length; i += list.length / numGroups) {
      const chunk = list.slice(i, i + list.length / numGroups);
      newList.push(chunk)
    }
    return newList;
  }

  return (
    <CombinedFlexDiv id='combinedAbility' data-testid="combinedAbility">
      {getsplitList().map((components, index) => <SplitDiv key={index}>{components}</SplitDiv>)}
    </CombinedFlexDiv>
  );
}

export { CombinedList };
