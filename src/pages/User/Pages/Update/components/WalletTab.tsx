import { FormBox } from "@/components/FormBox";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";
import { useAccount, useDisconnect } from "wagmi";
import { truncateAddress } from "@/utils/truncateAddress";
import { useNavigate } from "react-router-dom";

export const WalletTab = () => {
  const { disconnect } = useDisconnect();
  const { address, chain } = useAccount();

  const navigate = useNavigate();

  const handleDisconnect = () => {
    disconnect();
    navigate("/");
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
