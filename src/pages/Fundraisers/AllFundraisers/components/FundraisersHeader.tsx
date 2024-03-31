import { Button, Grid, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { FundraiserContext } from "../../context/FundraiserContext";

export const FundraisersHeader = () => {
  const { setPopupState } = useContext(FundraiserContext)!;

  const handleOpenPopup = () => {
    setPopupState(true);
  };

  return (
    <Grid display="flex" gap="35px" flexDirection="column">
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        paddingTop="45px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid display="flex" flexDirection="column" alignItems="left">
          <Typography variant="h2">Explore Gundraisers</Typography>
          <Typography variant="subtitle2">
            Invest in Funds created by Music artist and earn royalties
          </Typography>
        </Grid>
        <Grid>
          <Button onClick={handleOpenPopup} variant="outlined" color="primary">
            Add New Fundraiser
          </Button>
        </Grid>
      </Grid>
      <Grid display="flex" paddingBottom="25px">
        <TextField
          fullWidth
          label="Search for fundraisers"
          id="searchFundraisers"
          placeholder="Search for fundraisers"
        />
      </Grid>
    </Grid>
  );
};
