import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

export const GlobalLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Outlet />
      <Footer />
    </ThemeProvider>
  );
};
