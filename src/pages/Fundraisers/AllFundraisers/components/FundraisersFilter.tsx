import { Button, Grid } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";
import { useContext } from "react";
import { FundraiserContext } from "../../context/FundraiserContext";

export const FundraisersFilter = () => {
  const { setPopupState } = useContext(FundraiserContext)!;

  const handleOpenPopup = () => {
    setPopupState(true);
  };

  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
      >
        {/* <Grid>
          <ToggleButtons values={["Top", "Trending"]} />
        </Grid> */}
        <Grid>
          <SelectOptions
            label="Music Genres"
            items={["All", "Dance", "Rock"]}
          />
        </Grid>
        <Grid alignContent="center">
          <Button onClick={handleOpenPopup} variant="outlined" color="primary">
            Add New Fundraiser
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
