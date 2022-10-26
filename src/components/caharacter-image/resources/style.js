import styled from "styled-components";
import { checkSize } from "utils";

const StyledImg = styled('img')`
  width: ${props => checkSize(props.size, 4)}px;
  height: ${props => checkSize(props.size, 4)}px;
  margin: 0;
  flex-direction: column;
  padding: 5px;
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

  :hover {
    background-color: #0008;
  }

  :active {
    background-color: #0003;
  }
`

const StyledInputButton = styled('div')`
  display: none;
  padding: 0;
  height: auto;
  margin: 0;
  background-color: ${props => props.bgColor ? props.bgColor : "#aaa"};

  :hover {
    display: block;
  }
`
const StyledBackgroundImg = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => checkSize(props.size, 4.2)}px;
  height: ${props => checkSize(props.size, 4.2)}px;
  background-image: url(${props => props.src});
  background-size: 100%;
  :hover ${StyledInputButton} {
    display: block;
  }

  ${props => props.round && `
    border-radius: 50%;
    padding: 3px;
  `}
  
  ${props => props.border && 'border: solid black 2px;'}
  ${props => props.borderColor && `border-color: ${props.borderColor};`}
`

function InputButton ({children, bgColor, ...props}) {
  return (
    <StyledInputButton bgColor={bgColor}>
      <LabelButton {...props}>
        {children}
      </LabelButton>
    </StyledInputButton>
  );
}

export { StyledImg, InputButton, HiddenInput, StyledBackgroundImg };
