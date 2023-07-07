
import { EmblemContainer, CharacterImg, StatusBar, currentHp, maxHp } from './imports';

export function CharacterEmblem() {
  return <EmblemContainer id='CharacterEmblem' data-testid="CharacterEmblem">
    <CharacterImg isUploadable />
    <StatusBar internalButtons maxConfig={maxHp} label="Health" color={{ positive: '#c00', negative: '#700', text: '#0a0' }} config={currentHp} />
  </EmblemContainer>
}
