import styled from "styled-components"

const TopWrapper = styled('div')`
  display: flex;
  align-items: center;
  ${props => props.reversed && `
    flex-direction: row-reverse;
    justify-content: flex-end;
  `}
  overflow: hidden;
`

const Wrapper = styled('div')`
  overflow: hidden;
  border-radius: 6px;
  margin-left: 0.1em;
  margin-right: 0.1em;
  position: relative;
  width: ${props => props.noMax ? 12 : 10 + (props.max / 6)}em;
  border: solid 1px black;
  height: 1.25em;
`
const BackBar = styled('div')`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  background-color: ${props => props.color};
  position: absolute;
  `

const FrontBar = styled('div')`
  top: 0;
  bottom: 0;
  left: 0;
  right: ${props => calcBarPrecentage(props)}%;
  height: 100%;
  z-index: -1;
  background-color: ${props => props.color};
  position: absolute;
`

const BarWrapper = styled('div')`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.internalButtons ? '25px' : 0};
  right: ${props => props.internalButtons ? '25px' : 0};
`

const calcBarPrecentage = (p) => {
  const precentage = p.inverted ? Math.round((p.value / p.max) * 100) : 100 + (-(Math.round((p.value / p.max) * 100)));
  return precentage;
}

export { TopWrapper, BarWrapper, Wrapper, FrontBar, BackBar }
