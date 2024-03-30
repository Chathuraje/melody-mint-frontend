import { Grid, TextField, Typography } from "@mui/material";

export const FundraisersHeader = () => {
  return (
    <Grid display="flex" gap="35px" flexDirection="column" paddingTop="45px">
      <Grid display="flex" flexDirection="column" alignItems="left">
        <Typography variant="h2">Explore Gundraisers</Typography>
        <Typography variant="subtitle2">
          Invest in Funds created by Music artist and earn royalties
        </Typography>
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
