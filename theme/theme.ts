const white = "#FFFFFF";
const black = "#181818";

const cardWhite = "#3c3c3c";
const cardBlack = "#8d8f905e";
// const white2 = "#f5f5f5";
// const black2 = "#c2c2c2";
//   backgroundSecondary: white2
//   backgroundSecondary: black2

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#000",
  boxShadow: "0px 0px 13px 4px rgba(255,255,255,.35)",
  cardBackground: cardWhite,
  cardColor: cardBlack
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#fff",
  boxShadow: "0px 0px 13px 4px rgba(255,255,255,.35)",
  cardBackground: cardBlack,
  cardColor: cardWhite
};

const theme = (mode: string) => (!(mode === "dark") ? themeDark : themeLight);

export default theme;
