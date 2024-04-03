import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { CampaignData } from "./components/CampaignInformation/CampaignData";
import { InvestorsTable } from "./components/CampaignInformation/InvestorsTable";
import { FundraiseUpdates } from "./components/CampaignInformation/FundraiseUpdates";
import { CurrentProgress } from "./components/InvestInformation/CurrentProgress";
import { CampaignStats } from "./components/InvestInformation/CampaignStats";
import { InvestForm } from "./components/InvestInformation/InvestForm";

export const SingleFundraisersItem = () => {
  return (
    <Container>
      <Grid
        container
        sm={12}
        padding="50px 0 0 0" // Adjust this padding as needed
        display="flex"
        flexDirection="row"
        alignContent="left"
        justifyContent="space-between"
        gap="12px"
        margin="auto"
      >
        <Grid xs={8} display="flex" flexDirection="column" gap="35px">
          <CampaignData />
          <InvestorsTable />
          <FundraiseUpdates />
        </Grid>
        <Grid xs={3} display="flex" flexDirection="column" gap="35px">
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
        </Grid>
      </Grid>
    </Container>
  );
};
