import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { Content } from "./layouts/Content/Content";
import { LoadingProvider } from "./context/LoadingProvider";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingProvider>
          <Header />
          <Content />
          <Footer />
        </LoadingProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
