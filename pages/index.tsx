import { NextPage } from "next";
import { useState } from "react";
import Grid from "../components/Grid";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import { AppWrapper, GridHeading } from "../styles/pages";
import GlobalStyles from "../styles/global";
import { State as CellState, CellType } from "../types";
import fetch from "unfetch";
import swr from "swr";

const saveMission = async () => {
  const res = await fetch("/api/mission", { method: "PUT" });
  const json = await res.json();
  return json;
};

const Home: NextPage = () => {
  const [gridX, setGridX] = useState(5);
  const [gridY, setGridY] = useState(5);
  const [showGrid, setShowGrid] = useState(false);
  const themeState = useTheme();
  const defaultCellState: CellType = { state: CellState.U, pathed: false };
  const initialGridState: CellType[][] =
    gridX > 0 && gridY > 0
      ? Array(gridX)
          .fill(0)
          .map(row => new Array(gridY).fill(defaultCellState))
      : [];
  const logoSrc = `/logo-${themeState.dark ? "white" : "black"}.png`;
  return (
    <ThemeProvider>
      <AppWrapper>
        <GlobalStyles />
        <img
          src={logoSrc}
          style={{ position: "absolute", top: "0", right: "0", margin: "1em" }}
        />
        <GridHeading>Enter the grid size</GridHeading>
        <input
          name="gridX"
          onChange={e => {
            setShowGrid(false);

            return setGridX(parseInt(e.target.value, 10));
          }}
          value={String(gridX)}
          type="number"
          min="0"
        ></input>
        <input
          name="gridY"
          onChange={e => {
            setShowGrid(false);
            return setGridY(parseInt(e.target.value, 10));
          }}
          value={String(gridY)}
          type="number"
          min="0"
        ></input>
        <button onClick={() => setShowGrid(true)} type="button">
          Generate
        </button>
        {showGrid && gridX > 0 && gridY > 0 && (
          <Grid initialGridState={initialGridState} />
        )}
        <button type="button" onClick={saveMission}>
          SAVE this Mission
        </button>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Home;
