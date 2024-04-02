import { FormBox } from "@/components/FormBox";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";

export const WalletTab = () => {
  return (
    <FormBox
      title="Wallet Details"
      description="In order to use crypto to use service in melodymint, you need to have a wallet connected."
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="left"
        gap="25px"
      >
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          gap="8px"
          width="100%"
        >
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="left"
            gap="8px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="left"
              gap="8px"
            >
              <IconButton aria-label="Ethereum">
                <img
                  src={EthLogo}
                  alt="Icon eth badge"
                  width="25px"
                  height="25px"
                />
              </IconButton>
            </Grid>
            <Grid>
              <Typography variant="h5">Polygon Network</Typography>
              <Typography variant="subtitle1" color="black" fontSize="14px">
                0xc3d3EA....1C92D96
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button variant="contained" color="error">
              Disconnect
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </FormBox>
  );
};
