import styled from "styled-components";

export const AppWrapper = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.body};
  min-height: 100vh;
`;

export const GridHeading = styled.h2`
  margin: 0px;
`;
