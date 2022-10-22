import styled from "styled-components";

function Checkbox({children, type, round=false, checked, ...props}) {
  return <input type={round ? 'radio' : 'checkbox'} checked={checked} {...props} />
}
const StyledChekbox = styled(Checkbox)`
  width: ${props => checkSize(props.size)};
  height: ${props => checkSize(props.size)};
`

function checkSize(size) {
  if (typeof size != 'string') {
    return '20px'
  }

  switch (size.toLowerCase()) {
    case 's':
    case 'small':
      return '10px';
    case 'm':
    case 'medium':
      return '20px';
    case 'l':
    case 'large':
      return '40px';
    case 'extra large':
    case 'xl':
      return '60px';
    default:
      return '20px';
  }
}

export { StyledChekbox };
