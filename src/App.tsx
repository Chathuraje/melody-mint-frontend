import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "@/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <Box width="100%" height="100%">
          Hello!
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
