
import { EmblemContainer, CharacterImg, StatusBar, CombatEmblems, currentHp, maxHp, currentTempHp, FlexBarWrapper, RelativeContainer, LevelEmblem, totalLevel } from './imports';

export function CharacterEmblem() {
  return <EmblemContainer id='CharacterEmblem' data-testid="CharacterEmblem">
    <RelativeContainer>
      <CharacterImg isUploadable />
      <LevelEmblem config={totalLevel} />
    </RelativeContainer>
    <FlexBarWrapper>
      <StatusBar
        internalButtons
        maxConfig={maxHp}
        label="Health"
        color={{ positive: '#c00', negative: '#700', text: '#0a0' }}
        config={currentHp}
      />
      <StatusBar
        internalButtons
        noMax
        label="Temp HP"
        color={{ positive: '#0cc', negative: '#077', text: '#dd0' }}
        config={currentTempHp}
      />
      <CombatEmblems />
    </FlexBarWrapper>
  </EmblemContainer>
}
