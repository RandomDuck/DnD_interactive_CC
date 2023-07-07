import { useAtom } from "jotai";
import {
  TopWrapper,
  Wrapper,
  ValueButtons,
  BackBar,
  FrontBar,
  BarWrapper,
  ValueText,
  SubtractionButton,
  AdditionButton
} from "./imports";

export function StatusBar({ label, color, internalButtons = false, inverted = false, reversed = false, min = 0, arAmmount = 1, config, maxConfig }) {
  const [value] = useAtom(config);
  const [max] = useAtom(maxConfig)
  return (
    <TopWrapper reversed={reversed} data-testid="status-bar">
      {!internalButtons && <ValueButtons min={min} max={max} arAmmount={arAmmount} config={config} />}
      <Wrapper max={max} >
        {internalButtons && <SubtractionButton min={min} config={config} />}
        <BarWrapper internalButtons={internalButtons} >
          <BackBar color={color.negative} />
          <FrontBar inverted={inverted} color={color.positive} max={max} value={value} />
        </BarWrapper>
        <ValueText label={label} valueConfig={config} maxConfig={maxConfig} color={color.text} />
        {internalButtons && <AdditionButton max={max} config={config} />}
      </Wrapper>
    </TopWrapper>
  );
}
