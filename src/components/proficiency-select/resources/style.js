import styled from "styled-components";
import { checkSize } from "@/utils/scale";

const StyledSelect = styled('select')`
  margin: 0;
  width: ${props => checkSize(props.size, 2)}px;
  height: ${props => checkSize(props.size)}px;
`

const StyledDiv = styled('div')`
border: none !important;
margin: 0;
`

const StyledInput = styled('input')`
  width: ${props => checkSize(props.size, 1.8)}px;
  height: ${props => checkSize(props.size, .7)}px;
  margin: 0;
`

export { StyledSelect, StyledDiv, StyledInput };
