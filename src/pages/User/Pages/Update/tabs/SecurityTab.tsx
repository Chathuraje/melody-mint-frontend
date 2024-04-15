import { FormBox } from "@/components/FormBox";
import { Button, Grid, Typography } from "@mui/material";

export const SecurityTab = () => {
  return (
    <FormBox
      title="Security Details"
      description="In order to use crypto to use service in melodymint, you need to have a wallet connected."
    >
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="50px"
      >
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="25px"
        >
          <Grid
            display="flex"
            xs={12}
            flexDirection="column"
            justifyContent="space-between"
            gap="25px"
          >
            <Grid display="flex" flexDirection="column" gap="15px">
              <Typography variant="h5">Disable Account</Typography>
              <Typography variant="subtitle1" color="black" fontSize="14px">
                order to use crypto to use service in melodymint order to use
                crypto to use service in melodymint order to use crypto to use
                service in melodymint
              </Typography>
            </Grid>
            <Button variant="contained" color="error">
              Disable
            </Button>
          </Grid>
          <Grid
            display="flex"
            xs={12}
            flexDirection="column"
            justifyContent="space-between"
            gap="25px"
          >
            <Grid display="flex" flexDirection="column" gap="15px">
              <Typography variant="h5">Transfer Account</Typography>
              <Typography variant="subtitle1" color="black" fontSize="14px">
                order to use crypto to use service in melodymint order to use
                crypto to use service in melodrvice in melodrvice in melodrvice
                in melodymint order to use crypto to use service in melodymint
              </Typography>
            </Grid>
            <Button variant="contained" color="primary">
              Transfer Account
            </Button>
          </Grid>
        </Grid>

        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="25px"
        >
          <Grid
            display="flex"
            xs={6}
            flexDirection="column"
            justifyContent="space-between"
            gap="25px"
          >
            <Grid display="flex" flexDirection="column" gap="15px">
              <Typography variant="h5">Disable Account</Typography>
              <Typography variant="subtitle1" color="black" fontSize="14px">
                order to use crypto to use service in melodymint order to use
                crypto to use service in melodymint order to use crypto to use
                service in melodymint
              </Typography>
            </Grid>
            <Button variant="contained" color="error">
              Completely Delete the Accounnt
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </FormBox>
  );
};
