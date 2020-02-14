import { NextPage } from "next";
import { useState } from "react";
import Grid from "../components/Grid";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import { AppWrapper, GridHeading } from "./_styles";
import GlobalStyles from "../styles/global";

const Home: NextPage = () => {
  const [gridX, setGridX] = useState(5);
  const [gridY, setGridY] = useState(5);
  const [showGrid, setShowGrid] = useState(false);
  const themeState = useTheme();

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
          <Grid gridX={gridX} gridY={gridY} />
        )}
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Home;
