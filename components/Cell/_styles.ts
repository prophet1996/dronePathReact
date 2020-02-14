import styled from "styled-components";

export const StyledCell = styled.div`
  border-radius: 3px;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.cardColor};
  margin: auto;
  padding: 1em;
  &:hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
