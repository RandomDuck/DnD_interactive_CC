import styled from "styled-components";
import { checkSize } from "@/utils";

const StyledImg = styled('img')`
  width: ${props => checkSize(props.$size, 4)}px;
  height: ${props => checkSize(props.$size, 4)}px;
  margin: 0;
  flex-direction: column;
  padding: 5px;

  ${props => props.$round && `
    border-radius: 50%;
    padding: 3px;
  `}
`

const HiddenInput = styled('input')`
  display: none;
`

const LabelButton = styled('label')`
  border: solid 1px black;
  user-select: none;
  cursor: pointer;
  display: block;
  text-align: center;
  margin: 0;
  padding: 2px;
  height: 99%;
  border-radius: 5px;
  background-color: #0004;

  :hover {
    background-color: #0006;
  }

  :active {
    background-color: #0003;
  }
`

const StyledInputButton = styled('div')`
  border-radius: 5px;
  background-color: ${props => props.$bgColor ? props.$bgColor : "#aaa"};
`

const ColoredContainer = styled('div')`
  align-items: center;
  justify-content: center;
  display: none;
  padding: 3% 15%;
  margin: 0;
  background-color: ${props => props.$bgColor ? props.$bgColor : "#aaa"}7;
  width: 100%;
  height: 100%;

  :hover {
    display: flex;
  }
`

const StyledBackgroundImg = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => checkSize(props.$size, 4.2)}px;
  height: ${props => checkSize(props.$size, 4.2)}px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;

  :hover ${ColoredContainer} {
    display: flex;
  }

  ${props => props.$round && `
    border-radius: 50%;
    padding: 3px;
    ${ColoredContainer} {
      border-radius: 50%;
    }
  `}
  
  ${props => props.$border && 'border: solid black 2px;'}
  ${props => props.$borderColor && `border-color: ${props.$borderColor};`}
`

function InputButton({ children, $bgColor, ...props }) {
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

export { StyledImg, InputButton, HiddenInput, StyledBackgroundImg };
