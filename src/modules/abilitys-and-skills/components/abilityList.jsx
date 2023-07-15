import { AbilityScore, AbilityStyledUl } from '../imports';

const AbilityList = () => {
  return (
    <AbilityStyledUl id='abs' data-testid="abs">
      Ability scores:
      <AbilityScore type='strenght' />
      <AbilityScore type='dexterity' />
      <AbilityScore type='constitution' />
      <AbilityScore type='intelligence' />
      <AbilityScore type='wisdom' />
      <AbilityScore type='charisma' />
    </AbilityStyledUl>
  );
}

export { AbilityList };
