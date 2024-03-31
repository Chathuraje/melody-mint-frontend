import { InvestorsTable } from "./CampaignInformation/InvestorsTable";
import { FundraiseUpdates } from "./CampaignInformation/FundraiseUpdates";
import { CampaignData } from "./CampaignInformation/CampaignData";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const CampaignInformation = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="35px">
      <CampaignData />
      <InvestorsTable />
      <FundraiseUpdates />
    </Grid>
  );
};
