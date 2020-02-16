import { NextPage } from "next";
import { useState } from "react";
import Grid from "../components/Grid";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import { AppWrapper, GridHeading } from "../styles/pages";
import GlobalStyles from "../styles/global";
import { State as CellState, CellType } from "../types";
import fetch from "unfetch";
import swr from "swr";
import * as firebase from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCjdftXLYlmsOLMN9nCrSVPbOSvTBcbImw",
  authDomain: "flytbase-mission.firebaseapp.com",
  databaseURL: "https://flytbase-mission.firebaseio.com",
  projectId: "flytbase-mission",
  storageBucket: "flytbase-mission.appspot.com",
  messagingSenderId: "643898009691",
  appId: "1:643898009691:web:b1c56cc4b6a4a84658377e"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const collection = db.collection("missionData");
const saveMission = async (gridState: firebase.firestore.DocumentData) => {
  // Add a second document with a generated ID.
  collection
    .add({ gridState: JSON.stringify(gridState) })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
};

const download = (filename: string, text: string) => {
  const element = document.createElement("a");
  const file = new Blob([text], { type: "text/json" });
  element.href = URL.createObjectURL(file);
  element.download = `${filename}.json`;
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
};
const getAllMissions = async (limit: number) => {
  let allMissionData = "";
  let i = 0;
  collection
    .get()
    .then(function(querySnapshot) {
      querySnapshot.forEach(doc => {
        // doc.data() is never undefined for query doc snapshots
        if (i > limit) return;
        i++;
        console.log(doc.id, " => ", doc.data());
        if (doc.data().gridState)
          allMissionData = allMissionData + doc.data().gridState;
      });
      download("allMissionData", allMissionData);
    })
    .catch(function(error) {
      console.log("Error getting document:", error);
    });
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
          <Grid initialGridState={initialGridState} saveMission={saveMission} />
        )}
        <button type="button" onClick={() => getAllMissions(5)}>
          Get all Mission
        </button>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default Home;
