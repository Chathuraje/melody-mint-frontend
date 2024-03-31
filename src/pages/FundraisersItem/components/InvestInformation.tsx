import { Unstable_Grid2 as Grid } from "@mui/material";
import { InvestForm } from "./InvestInformation/InvestForm";
import { CurrentProgress } from "./InvestInformation/CurrentProgress";
import { CampaignStats } from "./InvestInformation/CampaignStats";

export const InvestInformation = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      borderRadius="16px"
      border="1px solid #E0E0E0"
      padding="25px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      height="auto"
      gap="70px"
    >
      <Grid display="flex" flexDirection="column" gap="15px">
        <CurrentProgress />
        <hr />
        <CampaignStats />
      </Grid>
      <InvestForm />
    </Grid>
  );
};
