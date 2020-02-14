import React, { FunctionComponent } from "react";
import { Grid as GridType } from "../../types";
import Cell from "../Cell";
import { State as CellState } from "../../types";
import {
  GridWrapper,
  ColWrapper,
  CellWrapper,
  ColHeading,
  RowHeading
} from "./_styles";

const Grid: FunctionComponent<GridType> = ({ gridX, gridY }) => {
  //Grid will tell what the state of next Clicked cell will be on Click

  const columns: JSX.Element[][] = [];
  while (columns.length < gridX) {
    const column: JSX.Element[] = [];
    while (column.length < gridY) {
      column.push(<Cell state={CellState.D}></Cell>);
    }
    columns.push(column);
  }
  return (
    <GridWrapper>
      {columns.map((col, i) => (
        <ColWrapper>
          <ColHeading> Col {i}</ColHeading>

          {col.map((cell, j) => (
            <CellWrapper i={i}>
              <RowHeading>{i === 0 && j}</RowHeading>
              {cell}
            </CellWrapper>
          ))}
        </ColWrapper>
      ))}
    </GridWrapper>
  );
};

export default Grid;
