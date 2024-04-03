import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { Header } from "./layouts/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./layouts/Footer/Footer";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
