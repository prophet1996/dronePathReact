const white = "#FFFFFF";
const black = "#181818";

const cardWhite = "#3c3c3c";
const cardBlack = "#8d8f90";

const themeLight = {
  background: white,
  body: black,
  bodyFade: "#868383",
  highLight: "#000",
  boxShadow: "13px 15px 36px -14px rgba(0,0,0,.35)",
  cardBackground: cardWhite,
  cardColor: cardBlack
};

const themeDark = {
  background: black,
  body: white,
  bodyFade: "#b7b3b3",
  highLight: "#fff",
  boxShadow: "13px 15px 36px -14px rgba(255,255,255,.35)",
  cardBackground: cardBlack,
  cardColor: cardWhite
};

const theme = (mode: string) => (!(mode === "dark") ? themeDark : themeLight);

export default theme;
