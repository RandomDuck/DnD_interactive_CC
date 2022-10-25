import { AbilityScore, StyledUl } from './imports';

export function AbilityList () {
  return (
    <StyledUl id='abs' data-testid="abs">
      Ability scores:
      <AbilityScore type='str' />
      <AbilityScore type='dex' />
      <AbilityScore type='con' />
      <AbilityScore type='int' />
      <AbilityScore type='wis' />
      <AbilityScore type='chr' />
    </StyledUl>
  );
}
