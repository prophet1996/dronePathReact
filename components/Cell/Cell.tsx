import React, { FunctionComponent } from "react";
import { Cell as CellType, State as CellState } from "../../types";
import { StyledCell } from "./_styles";

const Cell: FunctionComponent<CellType> = ({
  state,
  pathed,
  x,
  y,
  onCellClick
}) => {
  return (
    <StyledCell
      disabled={state === CellState.D}
      onClick={() => onCellClick(x, y)}
      type="button"
      style={{ backgroundColor: `${pathed ? "#2196f3" : ""}`, color: "white" }}
    >
      {state}
    </StyledCell>
  );
};
export default Cell;
