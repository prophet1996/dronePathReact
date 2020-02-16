import styled from "styled-components";

export const StyledCell = styled.button`
  border-radius: 3px;
  background: ${props => props.theme.cardBackground};
  color: ${props => props.theme.cardColor};
  margin: auto;
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
  border: none;
  padding: 20px;
  &:hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
`;
