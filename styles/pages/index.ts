import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.body};
  min-height: 100vh;
`;

export const GridHeading = styled.h2`
  margin: 0px;
`;
export const GridInputWrapper = styled.div`
  padding: 1em;
  & > input {
    background: ${props => props.theme.background};
    border: none;
    border-bottom: 1px solid ${props => props.theme.body};
    color: ${props => props.theme.body};
    margin: 1em 1em 1em 0;
    outline: none;
    padding: 1em 0px;
  }
  & > button {
    border: none;
    color: white;
    background-color: #2196f3;
    cursor: pointer;
    margin: 1em;
    border-radius: 2px;
    padding: 1em;
  }
  /* Chrome, Safari, Edge, Opera */
  & > input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  & > input[type="number"] {
    -moz-appearance: textfield;
  }
`;
