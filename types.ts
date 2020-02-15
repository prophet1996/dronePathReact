import { Dispatch, SetStateAction } from "react";

export interface Grid {
  gridX: number;
  gridY: number;
}

export enum State {
  S = "S", //start
  E = "E", //end
  T = "T", //top
  B = "B", //bottom
  R = "R", //right
  L = "L", //left
  D = "D", //disabled
  U = "U" //unselected
}

export interface Cell {
  state: State;
  x: number;
  y: number;
  onCellClick: CallableFunction;
}

export type useEffectDarkMode = (
  | { dark: boolean; hasThemeMounted: boolean }
  | Dispatch<SetStateAction<{ dark: boolean; hasThemeMounted: boolean }>>
)[];

export interface Theme {
  dark: boolean;
  hasThemeMounted: boolean;
}
