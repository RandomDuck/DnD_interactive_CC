import styled from "styled-components";

const StyledDiv = styled('div')`
  color: black;
`
const BorderBox = styled('div')`
  padding: 0.5em;
  margin: 0.3em;
  height: 2.3em;
  width: 4em;
  margin-right: 0;
  border: solid;
  border-radius: 5px;
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`

const CheckboxContainer = styled('div')`
  display: flex;
  padding: 0.2em;
  flex-direction: row;
  justify-content: space-between;
  font-size: 0.85em;
  width: 4.95;
  margin-top: 0.2em;
  border: solid 1px black;
  background-color: white;
  align-items: center;
  border-radius: 5px;
`

const BoxText = styled('span')`
  padding-bottom: 0.24em;
  font-size: 0.7em;
`

export { StyledDiv, CheckboxContainer, BorderBox, BoxText };
