import { Unstable_Grid2 as Grid } from "@mui/material";
import { PopupLeft } from "./PopupLeft";
import { PopupRight } from "../../../pages/Fundraisers/AddNewFundraisers/PopupRight";

export const Popups = () => {
  return (
    <Grid
      container
      xs={12}
      display="flex"
      flexDirection="column"
      alignItems="left"
      width="100%"
      height="884px"
    >
      <Grid
        xs={5}
        display="flex"
        flexDirection="column"
        alignItems="left"
        justifyContent="center"
        height="900px"
        style={{
          background:
            "var(--Gradient-Blue-gradient-2, linear-gradient(180deg, rgba(29, 78, 216, 0.57) 0%, rgba(29, 78, 216, 0.26) 45.51%, rgba(29, 78, 216, 0.17) 100%), #000)",
        }}
      >
        <PopupLeft />
      </Grid>

      <Grid
        xs={7}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
      >
        <PopupRight />
      </Grid>
    </Grid>
  );
};
