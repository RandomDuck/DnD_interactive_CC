import styled from "styled-components";
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
`

export { LabelButton, StyledInputButton, ColoredContainer };
