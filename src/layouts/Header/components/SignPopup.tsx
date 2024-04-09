import { Logo } from "@/components/Logo";
import { Popups } from "@/components/Popup";
import { PopupContext } from "@/context/PopupProvider";
import {
  Button,
  Unstable_Grid2 as Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import SyncLockIcon from "@mui/icons-material/SyncLock";
import { useAuth } from "@/hooks/useAuth";
import { useAccount, useDisconnect } from "wagmi";
import { useNotification } from "@/hooks/useNotifications";

export const SignPopup = () => {
  const { popupState, setPopupState } = useContext(PopupContext)!;
  const { authenticate, isAuthenticated } = useAuth();

  const { address, chain, isConnected } = useAccount();
  const chainId = chain?.id;

  const { disconnect } = useDisconnect();

  const { sendNotification } = useNotification();

  if (!popupState || isAuthenticated() || !isConnected) return null;

  const popupClose = () => {
    sendNotification(
      "error",
      "User Cancelled the sign request. Disconnecting..."
    );
    disconnect();
    setPopupState(false);
  };

  const signMessage = () => {
    if (address && chainId) {
      authenticate(address, chainId);
    }
  };

  return (
    <Popups bgcolor="#1E1E1E">
      <Grid
        display="flex"
        flexDirection="column"
        height="500px"
        maxWidth="400px"
        justifyContent="space-between"
        alignItems="center"
        sx={{ overflowY: "auto" }}
        textAlign="center"
        color="white"
      >
        <Grid
          display="flex"
          flexDirection="row"
          gap="10px"
          alignItems="center"
          padding="10px"
          justifyContent="space-between"
          width="100%"
          boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)"
        >
          <LockPersonIcon color="primary" />
          <Typography fontSize="20px" fontWeight="600">
            Sign In with MelodyMint
          </Typography>
          <IconButton onClick={() => popupClose()}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Grid>

        <Grid
          display="flex"
          flexDirection="column"
          gap="15px"
          padding="40px"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="subtitle2"
            fontSize="16px"
            fontWeight="600"
            color="#808080"
          >
            This app would like to verify you as the owner of the wallet.
          </Typography>
          <Grid
            display="flex"
            flexDirection="row"
            gap="20px"
            padding="20px"
            alignItems="center"
          >
            <Grid>
              <Logo width={100} />
            </Grid>
            <Grid>
              <SyncLockIcon fontSize="large" />
            </Grid>
            <Grid>
              <Logo width={100} />
            </Grid>
          </Grid>
          <Typography
            variant="subtitle2"
            fontSize="16px"
            fontWeight="400"
            color="#A0A0A0"
          >
            Sign this message to prove you own this wallet and proceed.
            Canceling will disconnect you.
          </Typography>
        </Grid>

        <Grid container width="100%" boxShadow="0 0 10px 0 rgba(0, 0, 0, 0.2)">
          <Grid display="flex" width="100%" gap="15px" margin="25px">
            <Button fullWidth variant="outlined" onClick={popupClose}>
              Cancel
            </Button>
            <Button fullWidth variant="contained" onClick={signMessage}>
              Sign
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Popups>
  );
};
