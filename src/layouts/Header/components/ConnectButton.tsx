import { Button } from "@mui/material";
import { ConnectKitButton } from "connectkit";

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnecting, show }) => {
        return (
          <Button variant="contained" color="primary" onClick={show}>
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
