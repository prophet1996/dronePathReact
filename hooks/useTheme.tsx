import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "../theme/theme";
import {
  useEffectDarkMode as useEffectDarkModeType,
  Theme as ThemeType
} from "../types";

const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = (): useEffectDarkModeType => {
  const [themeState, setThemeState] = useState<ThemeType>({
    dark: false,
    hasThemeMounted: false
  });
  useEffect(() => {
    const lsDark = localStorage.getItem("dark") === "true";
    setThemeState({ ...themeState, dark: lsDark, hasThemeMounted: true });
  }, [themeState.dark]);
  return [themeState, setThemeState];
};

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [
    themeState,
    setThemeState
  ]: useEffectDarkModeType = useEffectDarkMode();
  if (!(themeState as any).hasThemeMounted) {
    //Show nothing while theme is loading on localStorage
    return <div />;
  }
  const toggle = () => {
    const dark = !(themeState as any).dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    (setThemeState as any)({ ...themeState, dark });
  };

  const computedTheme = (themeState as any).dark
    ? theme("dark")
    : theme("light");
  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{ dark: (themeState as any).dark, toggle }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
export { ThemeProvider, useTheme };
