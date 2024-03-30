import { Button, Grid } from "@mui/material";
import { ToggleButtons } from "./ui/ToggleButtons";
import { SearchField } from "./ui/SearchField";
import { useState } from "react";

export const FundraisersFilter = () => {
  const [popupState, setPopupState] = useState(false);

  const handlePopup = () => {
    console.log("Popup State:", popupState);
    setPopupState(!popupState);
  };

  return (
    <Grid
      display="flex"
      gap="35px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Grid display="flex" alignItems="center" justifyContent="left" gap="25px">
        <Grid>
          <ToggleButtons />
        </Grid>
        <Grid>
          <SearchField />
        </Grid>
      </Grid>
      <Grid>
        <Button onClick={handlePopup} variant="outlined" color="primary">
          Add New Fundraiser
        </Button>
      </Grid>
    </Grid>
  );
};
