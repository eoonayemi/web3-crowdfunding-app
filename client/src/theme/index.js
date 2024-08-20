const theme = {
  primary: {
    50: "#fff7ed",
    100: "#ffecd4",
    200: "#ffd5a8",
    300: "#ffb670",
    400: "#ff8c37",
    500: "#ff6b0f",
    600: "#f05006",
    700: "#c73a07",
    800: "#9e2e0e",
    900: "#7f290f",
    950: "#451105",
  },
  black: {
    50: "#f6f6f6",
    100: "#e7e7e7",
    200: "#d1d1d1",
    300: "#b0b0b0",
    400: "#888888",
    500: "#6d6d6d",
    600: "#5d5d5d",
    700: "#4f4f4f",
    800: "#454545",
    850: "#3d3d3d",
    900: "#1a1a1a",
    950: "#000000",
  },
  white: {
    50: "#ffffff",
    100: "#efefef",
    200: "#dcdcdc",
    300: "#bdbdbd",
    400: "#989898",
    500: "#7c7c7c",
    600: "#656565",
    700: "#525252",
    800: "#464646",
    900: "#3d3d3d",
    950: "#292929",
  },
};

export const primary = {
  b: theme.primary[500],
  l: theme.primary[200],
  vl: theme.primary[100],
  xl: theme.primary[50],
};

export const generateThemeByMode = (mode) => {
  const text = {
    color: mode === "dark" ? theme.black[950] : theme.white[50],
    mid: theme.white[200],
  };

  const dynamicTheme =
    mode === "dark"
      ? {
          primary: {
            ...primary,
          },
          text: {
            ...text,
          },
          bg: {
            l1: theme.black[900],
            l2: theme.black[850],
            l3: theme.black[800],
          },
        }
      : {
          primary: {
            ...primary,
          },
          text: {
            ...text,
          },
          bg: {
            l1: theme.white[50],
            l2: theme.white[100],
            l3: theme.white[200],
          },
        };

  return dynamicTheme;
};
