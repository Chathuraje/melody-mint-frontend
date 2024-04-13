import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";
import { Header } from "./layouts/Header/Header";
import { Footer } from "./layouts/Footer/Footer";
import { Content } from "./layouts/Content/Content";

function App() {
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Content />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
