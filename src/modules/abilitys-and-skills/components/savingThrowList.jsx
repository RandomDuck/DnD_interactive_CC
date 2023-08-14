import { SkillItem, SkillStyledUl } from '../imports';

const SavingThrows = () => {
  return (
    <SkillStyledUl id='savingthrow' data-testid="savingthrow">
      Saving throws:
      <SkillItem type='str' name='Strength' size='m' />
      <SkillItem type='dex' name='Dexterity' size='m' />
      <SkillItem type='con' name='Constitution' size='m' />
      <SkillItem type='int' name='Intelligence' size='m' />
      <SkillItem type='wis' name='Wisdom' size='m' />
      <SkillItem type='chr' name='Charisma' size='m' />
    </SkillStyledUl>
  );
}

export { SavingThrows };