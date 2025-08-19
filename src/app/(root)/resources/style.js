import styled from "styled-components";

const FlexDiv = styled('div')`
  flex-direction: ${props => props.$column ? '$column' : 'row'};
  display: inline-flex;
  align-items: ${props => props.$center ? 'center' : 'flex-start'};
  margin-top: 0;
  ${props => props.border && 'border: solid black 2px;'}
  ${props => props.padding && `padding: ${props.padding}`}
`

export { FlexDiv };
