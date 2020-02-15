import React, { FunctionComponent } from "react";
import { Cell as CellType, State as CellState } from "../../types";
import { StyledCell } from "./_styles";

const Cell: FunctionComponent<CellType> = ({ state, x, y, onCellClick }) => {
  return (
    <StyledCell
      disabled={state === CellState.D}
      onClick={() => onCellClick(x, y)}
      type="button"
    >
      {state}
    </StyledCell>
  );
};
export default Cell;
