import { Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import WalletIcon from "@mui/icons-material/Wallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useBalance, useAccount, useDisconnect } from "wagmi";
import { truncateAddress } from "@/utils/truncateAddress";

export const ConnectedView = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  const { data: { symbol = "", value = 0, decimals = 1 } = {} } = useBalance({
    address,
  });

  const readableAmount = Number(value) / 10 ** Number(decimals);
  const truncatedAddress = truncateAddress(address);
  return (
    <>
      <Grid
        display="flex"
        flexDirection="row"
        gap="25px"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="right"
          gap="15px"
          bgcolor="#f5f5f5"
          padding="8px"
          borderRadius="5px"
        >
          <WalletIcon />
          <Typography fontFamily="22px" fontWeight="400">
            {readableAmount.toFixed(2)} {symbol}
          </Typography>
        </Grid>
        {truncatedAddress}
        <Grid
          display="flex"
          justifyContent="right"
          bgcolor="#f5f5f5"
          padding="5px"
          borderRadius="5px"
          gap="15px"
        >
          <AccountCircleIcon />
          <KeyboardArrowDownIcon />
        </Grid>
      </Grid>

      <Button variant="contained" onClick={() => disconnect()}>
        Logout
      </Button>
    </>
  );
};
