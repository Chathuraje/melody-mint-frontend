import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import { PopupLeft } from "./PopupLeft";

interface PopupsProp {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopupContent = (props: PopupsProp) => {
  return (
    <Grid
      container
      xs={12}
      display="flex"
      flexDirection="row"
      alignItems="left"
      margin="auto"
      zIndex={2}
    >
      <Grid
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        height="750px"
        style={{
          background:
            "var(--Gradient-Blue-gradient-2, linear-gradient(180deg, rgba(29, 78, 216, 0.57) 0%, rgba(29, 78, 216, 0.26) 45.51%, rgba(29, 78, 216, 0.17) 100%), #000)",
        }}
      >
        <PopupLeft title={props.title} subtitle={props.subtitle} />
      </Grid>

      <Grid
        xs={7}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        margin="auto"
        style={{
          background: "#fff",
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          style={{
            margin: "10px",
          }}
          onClick={props.onClose}
        >
          X
        </Button>
        {props.children}
      </Grid>
    </Grid>
  );
};
