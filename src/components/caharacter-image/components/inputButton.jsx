import { LabelButton, StyledInputButton, ColoredContainer } from '../resources/inputButtonStyle';
export function InputButton({ children, $bgColor, ...props }) {
  return (
    <ColoredContainer $bgColor={$bgColor}>
      <StyledInputButton $bgColor={$bgColor}>
        <LabelButton {...props}>
          {children}
        </LabelButton>
      </StyledInputButton>
    </ColoredContainer>
  );
}
