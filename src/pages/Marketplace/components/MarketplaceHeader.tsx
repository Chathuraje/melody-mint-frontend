import { Grid, TextField, Typography } from "@mui/material";

export const MarketplaceHeader = () => {
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
          <Typography variant="h2">Marketplace</Typography>
          <Typography variant="subtitle2">
            Invest in Funds created by Music artist and earn royalties
          </Typography>
        </Grid>
      </Grid>
      <Grid display="flex" paddingBottom="25px">
        <TextField
          fullWidth
          label="Search for Marketplace"
          id="searchMarketplace"
          placeholder="Search for marketplace"
        />
      </Grid>
    </Grid>
  );
};
