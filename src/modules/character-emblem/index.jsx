
import { currentHp, maxHp, currentTempHp } from '@/atoms/health-bar-atom';
import { StatusBar } from '@/components/status-bar';
import { CharacterImg } from '@/components/caharacter-image';
import { CombatEmblems } from '@/components/combat-emblems';
import { totalLevel } from '@/atoms/level-atom';
import { EmblemContainer, FlexBarWrapper, RelativeContainer } from './resources/style';
import { LevelEmblem } from './components/levelEmblem';

export function CharacterEmblem() {
  return <EmblemContainer id='CharacterEmblem' data-testid="CharacterEmblem">
    <RelativeContainer>
      <CharacterImg isUploadable />
      <LevelEmblem config={totalLevel} />
    </RelativeContainer>
    <FlexBarWrapper>
      <StatusBar
        $internalButtons
        maxConfig={maxHp}
        label="Health"
        $color={{ positive: '#c00', negative: '#700', text: '#0a0' }}
        config={currentHp}
      />
      <StatusBar
        $internalButtons
        $noMax
        label="Temp HP"
        $color={{ positive: '#0cc', negative: '#077', text: '#dd0' }}
        config={currentTempHp}
      />
      <CombatEmblems />
    </FlexBarWrapper>
  </EmblemContainer>
}
