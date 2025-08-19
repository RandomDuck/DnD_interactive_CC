import styled from "styled-components";
import { checkSize } from "@/utils/scale";
import { ColoredContainer } from './inputButtonStyle';

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


const StyledBackgroundImg = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => checkSize(props.$size, 4.2)}px;
  height: ${props => checkSize(props.$size, 4.2)}px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;

  &:hover ${ColoredContainer} {
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

export { StyledImg, HiddenInput, StyledBackgroundImg };
