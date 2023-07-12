
import { EmblemContainer, CharacterImg, StatusBar, CombatEmblems, currentHp, maxHp, FlexBarWrapper } from './imports';

export function CharacterEmblem() {
  return <EmblemContainer id='CharacterEmblem' data-testid="CharacterEmblem">
    <CharacterImg isUploadable />
    <FlexBarWrapper>
      <StatusBar
        internalButtons
        maxConfig={maxHp}
        label="Health"
        color={{ positive: '#c00', negative: '#700', text: '#0a0' }}
        config={currentHp}
      />
      <CombatEmblems />
    </FlexBarWrapper>
  </EmblemContainer>
}
