import React, { FunctionComponent } from "react";
// import { Grid as GridType } from "../../types";
import { Cell as CellType } from "../../types";

const Grid: FunctionComponent<CellType> = ({ state }) => {
  return <div>Cell : {state}</div>;
};

export default Grid;
