import { AbilityStyledUl } from '../resources/componentStyle';
import { AbilityScore } from '@/components/ability-score';

const AbilityList = () => {
  return (
    <AbilityStyledUl id='abs' data-testid="abs">
      Ability scores:
      <AbilityScore type='strength' />
      <AbilityScore type='dexterity' />
      <AbilityScore type='constitution' />
      <AbilityScore type='intelligence' />
      <AbilityScore type='wisdom' />
      <AbilityScore type='charisma' />
    </AbilityStyledUl>
  );
}

export { AbilityList };
