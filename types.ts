import { Dispatch, SetStateAction } from "react";

export enum State {
  S = "S", //start
  E = "E", //end
  T = "T", //top
  B = "B", //bottom
  R = "R", //right
  L = "L", //left
  D = "D", //disabled
  U = "U", //unselected,
  I = "I" //Initial Path generation
}

export interface Cell {
  state: State;
  x: number;
  y: number;
  onCellClick: CallableFunction;
}

export interface CellType {
  state: State;
  pathed: boolean;
  direction?: State;
}

export type useEffectDarkMode = (
  | { dark: boolean; hasThemeMounted: boolean }
  | Dispatch<SetStateAction<{ dark: boolean; hasThemeMounted: boolean }>>
)[];

export interface Theme {
  dark: boolean;
  hasThemeMounted: boolean;
}

export type PathEnd = {
  x: number;
  y: number;
};
