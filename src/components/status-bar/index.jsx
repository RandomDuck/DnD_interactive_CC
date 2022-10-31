import { StyledDiv } from "./imports";

export function StatusBar ({ label, color, max }) {
  return(
    <StyledDiv color={color} data-testid="status-bar">
      {label}
    </StyledDiv>
  );
}
