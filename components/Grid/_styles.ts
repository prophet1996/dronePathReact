import styled from "styled-components";

export const CellWrapper = styled.div`
  margin: 1em;
  position: relative;
  display: flex;
`;
export const ColHeading = styled.h3`
  margin: 1em;
`;
export const RowHeading = styled.span`
  float: left;
  left: -2em;
  position: absolute;
`;
export const ColWrapper = styled.div`
  margin: 2em;
`;
export const GridWrapper = styled.div`
  display: flex;
  justify-content: normal;
  align-items: center;
  overflow-x: scroll;
`;

export const DronePathButton = styled.span`
  background-color: #2196f3;
  border: none;
  border-radius: 2px;
  bottom: 0;
  right: 0;
  padding: 0.5em;
  z-index: 1000;
  position: fixed;
  font-size: smaller;
  cursor: default;
  margin-right: 2em;
  margin-bottom: 2em;
`;

export const DronePathDirButton = styled.button`
  border: none;
  color: white;
  background-color: #2196f3;
  cursor: pointer;
  font-size: large;
  font-weight: 900;
`;
