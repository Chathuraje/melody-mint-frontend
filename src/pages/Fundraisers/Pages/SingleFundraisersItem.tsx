import {
  Box,
  Button,
  Container,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { CampaignData } from "../components/CampaignInformation/CampaignData";
import { InvestorsTable } from "../components/CampaignInformation/InvestorsTable";
import { FundraiseUpdates } from "../components/CampaignInformation/FundraiseUpdates";
import { InvestTextBox } from "@/components/ui/InvestTextBox";
import { IconInformationBox } from "@/components/ui/IconInformationBox";
import TokenIcon from "@mui/icons-material/Token";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";

export const SingleFundraisersItem = () => {
  const EditCalendar = <EditCalendarIcon />;
  const EventBusy = <EventBusyIcon />;
  const Token = <TokenIcon />;

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
              <Grid display="flex" flexDirection="column" gap="5px">
                <Typography variant="h4" color="black">
                  Eth 0.1 Raised
                </Typography>
                <Box width="100%">
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={55}
                  />
                </Box>
                <Typography variant="subtitle1" color="black" fontSize="14px">
                  Goal: 1 ETH
                </Typography>
              </Grid>
              <hr />
              <Grid display="flex" flexDirection="column" gap="15px">
                <IconInformationBox
                  icon={EditCalendar}
                  title="Fund Created"
                  value="01/01/2024"
                />

                <IconInformationBox
                  icon={EventBusy}
                  title="Fund Deadline"
                  value="01/01/2024"
                />

                <IconInformationBox
                  icon={Token}
                  title="Token owners"
                  value="Over 1k tokens"
                />
              </Grid>
              <Grid
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="center"
                width="100%"
              >
                <Button fullWidth variant="contained" color="secondary">
                  View collection
                </Button>
              </Grid>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              width="100%"
              gap="15px"
            >
              <Typography
                variant="subtitle1"
                color="black"
                fontSize="14px"
                fontWeight="200"
              >
                Enter your investment to support the artist
              </Typography>
              <Grid
                container
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <InvestTextBox />
              </Grid>
              <Button fullWidth variant="contained" color="primary">
                Invest
              </Button>
            </Grid>

            <Grid
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              width="100%"
              gap="15px"
            >
              <Button fullWidth variant="contained" color="primary">
                Edit
              </Button>
              <Button fullWidth variant="contained" color="primary">
                Release Royalties
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
