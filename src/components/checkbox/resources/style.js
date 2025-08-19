import styled from "styled-components";
import { checkSize } from "@/utils/scale";

function Checkbox({ children, type, round = false, checked, ...props }) {
  return <input type={round ? 'radio' : 'checkbox'} checked={checked} {...props} />
}

const StyledChekbox = styled(Checkbox)`
  width: ${props => checkSize(props.size)}px;
  height: ${props => checkSize(props.size)}px;
  margin: 0;
`

export { StyledChekbox };
