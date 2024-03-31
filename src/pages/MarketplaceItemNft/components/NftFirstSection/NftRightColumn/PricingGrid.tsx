import { Grid, Typography } from "@mui/material";

export const PricingGrid = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="5px">
      <Grid display="flex" flexDirection="column" gap="5px">
        <Typography variant="subtitle1" fontSize="15px" color="#6D6D6D">
          Sale ends: 10 Mar 2023
        </Typography>
      </Grid>
      <Grid display="flex" flexDirection="column">
        <Typography variant="subtitle1" fontSize="15px" color="#6D6D6D">
          Current price
        </Typography>
        <Grid
          display="flex"
          alignItems="center"
          justifyContent="left"
          flexDirection="row"
          gap="8px"
        >
          <Typography variant="h6" fontSize="25px">
            <b>0.035 ETH</b>
          </Typography>
          <Typography variant="h6" fontSize="15px">
            ($108.46)
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
