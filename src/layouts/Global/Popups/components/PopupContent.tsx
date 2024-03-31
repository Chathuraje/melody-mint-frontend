import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import { PopupLeft } from "./PopupLeft";
import { useState } from "react";
import { NavigationButtons } from "@/layouts/Global/Popups/components/NavigationButtons";

interface PopupsProp {
  open: boolean;
  title: string;
  subtitle: string;
  onClose: () => void;
  screens: React.ReactNode[];
  onSubmit: () => void;
}

export const PopupContent = (props: PopupsProp) => {
  const [currentScreen, setCurrentScreen] = useState(0);

  const handleNextButtonClick = () => {
    if (currentScreen < props.screens.length - 1) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const handlePreviousButtonClick = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  return (
    <Grid
      container
      xs={12}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="left"
      margin="auto"
      zIndex={2}
      bgcolor="red"
      height="650px"
    >
      <Grid
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
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
        justifyContent="center"
        margin="auto"
        height="100%"
        style={{
          background: "#fff",
          flexGrow: 1,
        }}
      >
        <Grid display="flex" width="100%" justifyContent="right">
          <Button
            variant="contained"
            color="secondary"
            style={{
              margin: "10px",
              padding: "5px",
              top: -90,
            }}
            onClick={props.onClose}
          >
            X
          </Button>
        </Grid>
        <Grid>
          {props.screens[currentScreen]}
          <NavigationButtons
            onPrevious={handlePreviousButtonClick}
            onNext={handleNextButtonClick}
            onSubmit={props.onSubmit}
            showPrevious={currentScreen !== 0}
            showNext={currentScreen < props.screens.length - 1}
            showSubmit={currentScreen === props.screens.length - 1}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
