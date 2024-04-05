import { createTheme } from "@mui/material";
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
    success: {
      main: "#22c55e",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "8px 22px",
          alignItems: "center",
          borderRadius: "5px",
          fontSize: "14px",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        },
      },
      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            backgroundColor: "primary.main",
            color: "primary.secondary",
            border: "1px solid primary.main",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          },
        },
        {
          props: { variant: "contained", color: "secondary" },
          style: {
            color: "primary.secondary",
            border: "1px solid primary.main",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          },
        },
      ],
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "55px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "normal",
      letterSpacing: "-2.4px",
    },
    h2: {
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "72px",
    },
    h3: {
      fontSize: "42px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "56px",
    },
    h4: {
      fontSize: "32px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "56px",
    },
    h5: {
      fontSize: "20px",
      fontStyle: "normal",
      fontWeight: "600",
      lineHeight: "24px",
    },
    subtitle1: {
      color: "#FFFFFFB2",
      fontSize: "18px",
      fontWeight: "500",
      letterSpacing: "normal",
      lineHeight: "26px",
    },
    subtitle2: {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "normal",
      lineHeight: "26px",
    },
  },
});
