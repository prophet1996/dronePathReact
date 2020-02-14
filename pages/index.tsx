import { NextPage } from "next";
import { useState } from "react";
import Grid from "../components/Grid";

const Home: NextPage = () => {
  const [gridX, setGridX] = useState(5);
  const [gridY, setGridY] = useState(5);
  const [showGrid, setShowGrid] = useState(false);

  return (
    <>
      <h1>Enter the grid size</h1>
      <input
        name="gridX"
        onChange={e => {
          setShowGrid(false);

          setGridX(parseInt(e.target.value, 10));
        }}
        value={gridX}
        type="number"
        min="0"
      ></input>
      <input
        name="gridY"
        onChange={e => {
          setShowGrid(true);
          setGridY(parseInt(e.target.value, 10));
        }}
        value={gridY}
        type="number"
        min="0"
      ></input>
      <button onClick={() => setShowGrid(true)} type="button">
        Generate
      </button>
      {showGrid && gridX > 0 && gridY > 0 && (
        <Grid gridX={gridX} gridY={gridY} />
      )}
    </>
  );
};

export default Home;
