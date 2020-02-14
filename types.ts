import { Dispatch, SetStateAction } from "react";

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

export type useEffectDarkMode = (
  | { dark: boolean; hasThemeMounted: boolean }
  | Dispatch<SetStateAction<{ dark: boolean; hasThemeMounted: boolean }>>
)[];

export interface Theme {
  dark: boolean;
  hasThemeMounted: boolean;
}
