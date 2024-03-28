import { createTheme } from "@mui/material";

// indigo: {
//     100: "#d2dcf7",
//     200: "#a5b8ef",
//     300: "#7795e8",
//     400: "#4a71e0",
//     500: "#1d4ed8",
//     600: "#173ead",
//     700: "#112f82",
//     800: "#0c1f56",
//     900: "#06102b"
// },

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1d4ed8",
      light: "#1D4ED833",
      dark: "#06102b",
    },
    secondary: {
      main: "#FF5733",
      light: "#ffffff",
      dark: "#000000",
    },
    error: {
      main: "#E73A3A",
    },
  },
});
