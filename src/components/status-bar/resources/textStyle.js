import styled from "styled-components"

const TextContainer = styled('div')`
  color: ${props => props.color};
  position: absolute;
  z-index: 1;
  left: 1.5em;
  top: 1px;
  bottom: 0;
  right: 1.5em;
  text-shadow: 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
  display: flex;
  justify-content: center;
`

const TextInput = styled('input')`
  overflow-x: auto;
  text-align: ${props => props.pushRight ? 'end' : 'start'};
  width: 30%;
  max-width: ${props => props.maxWidth}em;
  color: inherit;
  text-shadow: 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000;
  border: none;
  background: none;
`

export { TextContainer, TextInput }