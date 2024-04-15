import { FormBox } from "@/components/FormBox";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { useAccount } from "wagmi";
import { truncateAddress } from "@/utils/truncateAddress";
import { useAuth } from "@/hooks/useAuth";
import { ChainIcon } from "connectkit";

export const WalletTab = () => {
  const { address, chain } = useAccount();
  const { logout } = useAuth();

  const handleDisconnect = () => {
    logout();
  };

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
            gap="18px"
          >
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="left"
              gap="8px"
            >
              <IconButton>
                <ChainIcon id={chain?.id} />
              </IconButton>
            </Grid>
            <Grid>
              <Typography variant="h5">{chain?.name} Network</Typography>
              <Typography variant="subtitle1" color="black" fontSize="14px">
                {truncateAddress(address, 8, 8)}
              </Typography>
            </Grid>
          </Grid>
          <Grid>
            <Button
              onClick={() => {
                handleDisconnect();
              }}
              variant="contained"
              color="error"
            >
              Disconnect
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </FormBox>
  );
};
