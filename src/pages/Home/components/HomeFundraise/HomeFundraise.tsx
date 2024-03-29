import { Button } from "@/components/ui";
import { FundraiserSection } from "@/layouts/FundraiserSection/FundraiserSection";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";

export const HomeFundraise = () => {
  return (
    <Grid display="flex" gap="35px" flexDirection="column">
      <Grid display="flex" md={12} flexDirection="column" alignItems="center">
        <Typography variant="h2">Featured fundraisers to support</Typography>

        <Typography variant="subtitle1" color="#000000B2">
          The more you invest, the more you earn
        </Typography>
      </Grid>
      <Grid md={12}>
        <FundraiserSection amount={8} />
      </Grid>

      <Grid display="flex" md={12} alignItems="center" justifyContent="center">
        <Button text="View all fundraisers" typeofButtons="tertiary-dark" />
      </Grid>
    </Grid>
  );
};
