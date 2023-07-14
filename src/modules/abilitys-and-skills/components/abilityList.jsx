import { AbilityScore, AbilityStyledUl } from '../imports';

const AbilityList = () => {
  return (
    <AbilityStyledUl id='abs' data-testid="abs">
      Ability scores:
      <AbilityScore type='str' />
      <AbilityScore type='dex' />
      <AbilityScore type='con' />
      <AbilityScore type='int' />
      <AbilityScore type='wis' />
      <AbilityScore type='chr' />
    </AbilityStyledUl>
  );
}

export { AbilityList };
