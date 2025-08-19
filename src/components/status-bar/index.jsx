import { atom, useAtom } from "jotai";
import {
  TopWrapper,
  Wrapper,
  BackBar,
  BarWrapper,
  FrontBar
} from './resources/indexStyle';
import {
  ValueButtons,
  SubtractionButton,
  AdditionButton
} from './components/valueButtons';
import { ValueText } from './components/valueText';

const localPlaceholderAtom = atom(1);

export function StatusBar({
  label,
  $color,
  $internalButtons = false,
  inverted = false,
  $noMax = false,
  reversed = false,
  min = 0,
  arAmmount = 1,
  config,
  maxConfig
}) {
  const [value] = useAtom(config);
  const [max] = useAtom($noMax ? localPlaceholderAtom : maxConfig)
  return (
    <TopWrapper reversed={reversed} data-testid="status-bar">
      {!$internalButtons && <ValueButtons min={min} max={$noMax ? Infinity : max} arAmmount={arAmmount} config={config} />}
      <Wrapper $noMax={$noMax} max={max} >
        {$internalButtons && <SubtractionButton min={min} config={config} />}
        <BarWrapper $internalButtons={$internalButtons} >
          <BackBar $color={$color.negative} />
          <FrontBar $inverted={inverted} $color={$color.positive} max={max} value={value} />
        </BarWrapper>
        <ValueText $noMax={$noMax} label={label} valueConfig={config} maxConfig={maxConfig} $color={$color.text} />
        {$internalButtons && <AdditionButton max={$noMax ? Infinity : max} config={config} />}
      </Wrapper>
    </TopWrapper>
  );
}
