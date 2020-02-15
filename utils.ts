import { CellType, State as CellState, PathEnd } from "./types";

export const generateStateWithPath = (
  gridState: CellType[][],
  pathEnds: PathEnd[],
  dir: CellState
): CellType[][] => {
  const newState = gridState.map((col, i) => {
    let newCol: CellType[];
    const pathedCell = {
      state: dir,
      pathed: true,
      direction: dir
    } as CellType;
    const currReverseDir = dir === CellState.T ? CellState.B : CellState.T;
    const endDirection =
      (pathEnds[0].x - pathEnds[1].x) % 2 === 0 ? dir : currReverseDir;

    if (i === pathEnds[0].x) {
      newCol = col.map((cell, j) => {
        if (i == pathEnds[0].x && j === pathEnds[0].y)
          return {
            state: CellState.S,
            pathed: true,
            direction: dir
          };
        if (dir === CellState.T && j < pathEnds[0].y) return pathedCell;
        if (dir === CellState.B && j > pathEnds[0].y) return pathedCell;
        else return cell;
      });
      return newCol;
    } else if (pathEnds[1].x === i) {
      newCol = col.map((cell, j) => {
        if (i == pathEnds[1].x && j === pathEnds[1].y)
          return {
            state: CellState.E,
            pathed: true,
            direction: dir
          };
        if (endDirection === CellState.T && j > pathEnds[1].y)
          return {
            state: endDirection,
            pathed: true,
            direction: endDirection
          } as CellType;
        if (endDirection === CellState.B && j < pathEnds[1].y)
          return {
            state: endDirection,
            pathed: true,
            direction: endDirection
          } as CellType;
        else return cell;
      });
      return newCol;
    }
    if (i > pathEnds[0].x && i < pathEnds[1].x) {
      newCol = col.map((cell, j) => {
        const tempDir = (i - pathEnds[0].x) % 2 === 0 ? dir : currReverseDir;
        return {
          state: tempDir,
          pathed: true,
          direction: tempDir
        } as CellType;
      });
      return newCol;
    } else return col;
  });
  return newState;
};
