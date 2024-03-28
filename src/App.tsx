import { ThemeProvider } from "@emotion/react";
import { GlobalLayout } from "./layouts/GlobalLayout";
import { theme } from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <GlobalLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
