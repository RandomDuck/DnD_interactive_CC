

import { CombatBox, StyledDiv, ModInput, Checkbox, CheckboxContainer, BoxText } from './imports';

export function CombatEmblems() {
  return (
    <StyledDiv id='combat-emblems' data-testid="combat-emblems">
      <CombatBox label="Inspiration">
        <Checkbox name="insp" size="l"/>
      </CombatBox>
      <CombatBox label="Initiative">
        <ModInput type="init"/>
      </CombatBox>
      <CombatBox label="Proficiency">
        <ModInput hideTxt type='proficiency' size='ml' displayScore />
      </CombatBox>
      <CombatBox label="Speed">
        <ModInput hideTxt type='speed' size='ml' displayScore />
      </CombatBox>
      <CombatBox label="Armor class">
        <ModInput hideTxt type='ac' size='ml' displayScore />
        <CheckboxContainer>
          <Checkbox name="shield" size='ms' />
          {/* Todo: add AC if a shield is in use */}
          <BoxText style={{marginLeft:'0.3em'}}>has shield</BoxText>
        </CheckboxContainer>
      </CombatBox>
    </StyledDiv>
  );
}
