import React, { FunctionComponent } from "react";
// import { Grid as GridType } from "../../types";
import { Cell as CellType } from "../../types";
import { StyledCell } from "./_styles";

const Cell: FunctionComponent<CellType> = ({ state }) => {
  return <StyledCell>{state}</StyledCell>;
};
export default Cell;
