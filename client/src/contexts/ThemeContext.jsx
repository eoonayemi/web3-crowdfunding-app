/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useState } from "react";
import { generateThemeByMode } from "../theme";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    (() => localStorage.getItem("themeMode")) || "light"
  );

  const theme = generateThemeByMode(themeMode);
  const setMode = (mode) => {
    setThemeMode(mode);
    localStorage.setItem("themeMode", mode);
  };

  return (
    <ThemeContext.Provider value={{ theme, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
