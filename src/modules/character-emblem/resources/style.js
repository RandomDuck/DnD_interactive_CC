"use client";
import styled from "styled-components";

const EmblemContainer = styled('div')`
  flex-direction: row;
  display: flex;
  align-items: flex-start;
  max-width: 100%;
`
const FlexBarWrapper = styled('div')`
  flex-direction: column;
  display: flex;
  flex: 1;
`

const CircularEmblem = styled('div')`
  border-radius: 50%;
  position: absolute;
  right: -0.2em;
  bottom: -0.2em;
  border: solid 1px black;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`

const RelativeContainer = styled('div')`
  position: relative;
`

export { EmblemContainer, FlexBarWrapper, CircularEmblem, RelativeContainer };
