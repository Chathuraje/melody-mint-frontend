import { Grid, IconButton, Typography } from "@mui/material";
import { ConnectKitButton } from "connectkit";

export const DisconnectedView = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnecting, show }) => {
        return (
          <IconButton onClick={show}>
            <Grid
              display="flex"
              justifyContent="right"
              bgcolor="#28282b"
              color="#f0f0f0"
              borderRadius="5px"
              padding="10px 20px"
              gap="15px"
              sx={{
                cursor: "pointer",
              }}
            >
              <Typography fontFamily="22px" fontWeight="400">
                {isConnecting ? "Connecting..." : "Connect Wallet"}
              </Typography>
            </Grid>
          </IconButton>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
