"use client";
import styled from "styled-components";
import { checkSize } from "@/utils";

const StyledInput = styled('input')`
  width: ${props => checkSize(props.size) * 2}px;
  height: ${props => checkSize(props.size)}px;
  text-align: center;
  padding: 0;
  ${props => {
    if (props.underline) {
      return `
          border-top: 0;
          border-left: 0;
          border-right: 0;
        `
    }
  }
  }
  /* Chrome, Safari, Edge, Opera */
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  [type=number] {
    -moz-appearance: textfield;
  }
`

const StyledSpan = styled('span')`
  margin-left: 6px;
  color: black;
  ${props => props.underline ? 'text-decoration: underline;' : ''}
`

export { StyledInput, StyledSpan };
