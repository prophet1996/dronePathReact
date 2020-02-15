import { CellType, State as CellState, PathEnd } from "./types";

export const generateStateWithPath = (
  gridState: CellType[][],
  pathEnds: PathEnd[],
  dir: CellState
): CellType[][] => {
  console.log("hi");
  const newState = gridState.map((col, i) => {
    if (pathEnds[0].x == i) return [];
    else return col;
  });
  return newState;
};
