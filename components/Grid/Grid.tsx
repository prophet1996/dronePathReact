import React, { FunctionComponent, useState } from "react";
import { Grid as GridType } from "../../types";
import Cell from "../Cell";
import { State as CellState } from "../../types";
import { ACTION_END, ACTION_START } from "../../constants";

import {
  GridWrapper,
  ColWrapper,
  CellWrapper,
  ColHeading,
  RowHeading
} from "./_styles";

const Grid: FunctionComponent<GridType> = ({ gridX, gridY }) => {
  //Grid will tell what the state of next Clicked cell will be on Click
  const [action, setAction] = useState(CellState.S);
  const [gridState, setGridState] = useState(
    Array(gridX)
      .fill(0)
      .map(row => new Array(gridY).fill(CellState.U))
  );
  const onCellClick = (x: number, y: number) => {
    setGridState(currState =>
      currState.map((col, i) =>
        col.map((cell, j) => (i === x && j === y ? action : cell))
      )
    );
  };

  return (
    <GridWrapper>
      {gridState.map((col, i) => (
        <ColWrapper key={`col-${i}`}>
          <ColHeading> Col {i}</ColHeading>

          {col.map((cell, j) => (
            <CellWrapper key={`cell-${j}`}>
              <RowHeading>{i === 0 && j}</RowHeading>
              <Cell x={i} y={j} state={cell} onCellClick={onCellClick}></Cell>
            </CellWrapper>
          ))}
        </ColWrapper>
      ))}
    </GridWrapper>
  );
};

export default Grid;
