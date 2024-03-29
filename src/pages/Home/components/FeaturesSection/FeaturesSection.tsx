import { Typography, Unstable_Grid2 as Grid } from "@mui/material";
import { Features } from "./Features";

export const FeaturesSection = () => {
  return (
    <Grid gap="35px" flexDirection="column">
      <Grid md={12} flexDirection="column" alignItems="center">
        <Typography variant="h2">
          Features that helps your music journey
        </Typography>

        <Typography variant="subtitle1" color="#000000B2">
          Melody Minty has in-built features that can help you with your
          fundraisers.
        </Typography>
      </Grid>

      <Features />
    </Grid>
  );
};
