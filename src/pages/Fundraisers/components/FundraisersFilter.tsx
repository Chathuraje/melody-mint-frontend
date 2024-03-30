import { Button, Grid } from "@mui/material";
import { ToggleButtons } from "./ui/ToggleButtons";
import { SearchField } from "./ui/SearchField";
import { useState } from "react";
import { SelectUserType } from "./CreateFundraisers/SelectUserType";
import { Popups } from "@/layouts/Global/Popups/Popups";

export const FundraisersFilter = () => {
  const [popupState, setPopupState] = useState(false);

  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="left"
          gap="25px"
        >
          <Grid>
            <ToggleButtons />
          </Grid>
          <Grid>
            <SearchField />
          </Grid>
        </Grid>
        <Grid>
          <Button
            onClick={() => setPopupState(true)}
            variant="outlined"
            color="primary"
          >
            Add New Fundraiser
          </Button>
        </Grid>
      </Grid>

      <Popups
        open={popupState}
        onClose={() => setPopupState(false)}
        title="Let’s Begin by choosing your role"
        subtitle="The registration process starts with selecting your role"
      >
        <SelectUserType />
      </Popups>
    </>
  );
};
