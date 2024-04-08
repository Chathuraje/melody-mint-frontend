import { Container, Unstable_Grid2 as Grid, Paper } from "@mui/material";
import { createPortal } from "react-dom";

interface PopupsProp {
  children?: React.ReactNode;
  bgcolor: string;
}

export const Popups = (props: PopupsProp) => {
  const { children, bgcolor } = props;

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
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 999999,
      }}
    >
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Grid>
          <Paper
            elevation={3}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: bgcolor,
              borderRadius: "20px",
            }}
          >
            {children}
          </Paper>
        </Grid>
      </Container>
    </Grid>,
    document.getElementById("popup") as Element
  );
};
