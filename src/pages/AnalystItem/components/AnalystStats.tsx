import { Unstable_Grid2 as Grid } from "@mui/material";
import { AnalystStatsBox } from "./AnalystStatsBox";

export const AnalystStats = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      alignContent="center"
      justifyContent="space-between"
      gap="15px"
      padding="25px 0 0 0 "
    >
      <AnalystStatsBox
        title="Total streaming platforms"
        value="12"
        metrics="platforms"
        subtitle="10% more than usual"
      />

      <AnalystStatsBox
        title="Total streaming time"
        value="58"
        metrics="mins"
        subtitle="10% more than usual"
      />

      <AnalystStatsBox
        title="Total streams"
        value="32"
        metrics="streams"
        subtitle="10% more than usual"
      />
    </Grid>
  );
};
