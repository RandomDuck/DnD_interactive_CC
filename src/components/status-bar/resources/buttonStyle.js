import styled from "styled-components";

const ButtonWrapper = styled('div')`
  position: relative;
  width: 50px;
  height: 25px;
`
const StyledButton = styled('button')`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 25px;
  ${props => props.$pushRight ? 'right: 0;' : 'left: 0;'}
`

export { ButtonWrapper, StyledButton };
