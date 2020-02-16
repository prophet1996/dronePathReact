import React, { FunctionComponent, useState } from "react";
import Cell from "../Cell";
import { State as CellState, CellType, PathEnd } from "../../types";
import { ACTION_END, ACTION_START } from "../../constants";
import { generateStateWithPath } from "../../utils";

import {
  GridWrapper,
  ColWrapper,
  CellWrapper,
  ColHeading,
  RowHeading,
  DronePathButton,
  DronePathDirButton
} from "./_styles";

const Grid: FunctionComponent<{
  initialGridState: CellType[][];
  saveMission: CallableFunction;
}> = ({ initialGridState, saveMission }) => {
  //Grid will tell what the state of next Clicked cell will be on Click
  const [gridState, setGridState] = useState(initialGridState);
  const [action, setAction] = useState(CellState.S);
  const pathCreated = false;
  const defaultPathEnds: PathEnd[] = [
    { x: -1, y: -1 },
    { x: -1, y: -1 }
  ];
  const [pathEnds, setPathEnds] = useState(defaultPathEnds);

  const onCellClick = (x: number, y: number) => {
    if (action === CellState.I) {
      setAction(CellState.S);
      setGridState(initialGridState);
    } else if (action === CellState.E || action === CellState.S) {
      if (action === CellState.E) {
        setPathEnds(
          (oldCopy: PathEnd[]) => [oldCopy[0], { x, y }] as PathEnd[]
        );
      }
      if (action === CellState.S) {
        setPathEnds(
          (oldCopy: PathEnd[]) => [{ x, y }, oldCopy[1]] as PathEnd[]
        );
      }
      setGridState(currState =>
        currState.map((col, i) =>
          col.map((cell, j) =>
            i === x && j === y ? { state: action, pathed: false } : cell
          )
        )
      );
    }
    if (CellState.S === action) setAction(CellState.E);
    else if (CellState.E === action) setAction(CellState.I);
  };

  return (
    <GridWrapper>
      {action === CellState.I && (
        <DronePathButton>
          Generate Drone Path{" "}
          <DronePathDirButton
            onClick={() =>
              setGridState(
                generateStateWithPath(initialGridState, pathEnds, CellState.T)
              )
            }
          >
            ↑
          </DronePathDirButton>
          <DronePathDirButton
            onClick={() =>
              setGridState(
                generateStateWithPath(initialGridState, pathEnds, CellState.B)
              )
            }
          >
            {" "}
            ↓
          </DronePathDirButton>
        </DronePathButton>
      )}
      {gridState.map((col, i) => (
        <ColWrapper key={`col-${i}`}>
          <ColHeading> Col {i}</ColHeading>

          {col.map((cell: CellType, j) => (
            <CellWrapper key={`cell-${j}`}>
              <RowHeading>{i === 0 && j}</RowHeading>
              <Cell
                x={i}
                y={j}
                state={cell.state}
                onCellClick={onCellClick}
                pathed={cell.pathed}
              ></Cell>
            </CellWrapper>
          ))}
        </ColWrapper>
      ))}
      <button type="button" onClick={() => saveMission(gridState)}>
        SAVE this Mission
      </button>
    </GridWrapper>
  );
};

export default Grid;
