import { Container, Unstable_Grid2 as Grid, Paper } from "@mui/material";
import { PopupContent } from "./PopupContent";
import { createPortal } from "react-dom";

interface PopupsProp {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const Popups = (props: PopupsProp) => {
  if (!props.open) return null;

  return createPortal(
    <Container>
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
        <Grid xs={10} sm={8} md={6} lg={8}>
          <Paper elevation={3}>
            <PopupContent {...props} />
          </Paper>
        </Grid>
      </Grid>
    </Container>,
    document.getElementById("popup") as Element // Add type assertion
  );
};
