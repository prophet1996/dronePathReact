export interface Grid {
  gridX: number;
  gridY: number;
}

export enum State {
  S = "S",
  E = "E",
  T = "U",
  B = "D",
  L = "L",
  R = "R",
  D = "D"
}

export interface Cell {
  state: State;
}
