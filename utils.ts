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
    /* If both are on the same column just replace that column */
    //check of they lie on same column
    if (pathEnds[0].x === pathEnds[1].x && i === pathEnds[1].x) {
      //which one S or E is Above the other
      const singleDir =
        pathEnds[0].y < pathEnds[1].y ? CellState.B : CellState.T;

      if (pathEnds[0].y < pathEnds[1].y) {
        //S is above E
        newCol = col.map((cell, j) => {
          if (j < pathEnds[0].y || j > pathEnds[1].y) return cell;
          let singleState;
          singleState = j === pathEnds[0].y ? CellState.S : singleDir;
          singleState = j === pathEnds[1].y ? CellState.E : singleState;

          return {
            state: singleState,
            pathed: true,
            dir: singleDir
          };
        });
      } else {
        //E is above S
        newCol = col.map((cell, j) => {
          if (j > pathEnds[0].y || j < pathEnds[1].y) return cell;
          let singleState;
          singleState = j === pathEnds[0].y ? CellState.S : singleDir;
          singleState = j === pathEnds[1].y ? CellState.E : singleState;

          return {
            state: singleState,
            pathed: true,
            dir: singleDir
          };
        });
      }
      return newCol;
    }
    /**If both are on diff column */
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
    }
    if (i < pathEnds[0].x && i > pathEnds[1].x) {
      newCol = col.map((cell, j) => {
        const tempDir = (i - pathEnds[1].x) % 2 === 0 ? dir : currReverseDir;
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
