import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { CampaignInformation } from "./components/CampaignInformation";
import { InvestInformation } from "./components/InvestInformation";

export const FundraisersItem = () => {
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
          <CampaignInformation />
        </Grid>
        <Grid xs={3} display="flex" flexDirection="column" gap="35px">
          <InvestInformation />
        </Grid>
      </Grid>
    </Container>
  );
};
