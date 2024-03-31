import { Container, Unstable_Grid2 as Grid, Paper } from "@mui/material";
import { PopupContent } from "./components/PopupContent";
import { createPortal } from "react-dom";

interface PopupsProp {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  screens: React.ReactNode[];
  onSubmit: () => void;
}

export const Popups = (props: PopupsProp) => {
  if (!props.open) return null;

  return createPortal(
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black overlay
        zIndex: 999999,
      }}
    >
      <Container>
        <Grid xs={12}>
          <Paper elevation={3}>
            <PopupContent {...props} />
          </Paper>
        </Grid>
      </Container>
    </Grid>,
    document.getElementById("popup") as Element // Add type assertion
  );
};
