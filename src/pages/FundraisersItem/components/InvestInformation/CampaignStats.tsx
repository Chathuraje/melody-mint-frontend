import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import TokenIcon from "@mui/icons-material/Token";
import { IconInformationBox } from "@/components/ui/IconInformationBox";

export const CampaignStats = () => {
  const EditCalendar = <EditCalendarIcon />;
  const EventBusy = <EventBusyIcon />;
  const Token = <TokenIcon />;

  return (
    <>
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
    </>
  );
};
