import { FormBox } from "@/components/FormBox";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import { useAccount } from "wagmi";
import { truncateAddress } from "@/utils/truncateAddress";
import { useAuth } from "@/hooks/useAuth";
import { ChainIcon } from "connectkit";
import { useProfile } from "@/pages/User/hooks/useProfile";
import { useRegisterUserWeb3 } from "@/api/useUserVerifyWeb3";
import Web3 from "web3";
import { useProfileAPI } from "@/api/useProfileAPI";
import { useEffect, useState } from "react";

export const WalletTab = () => {
  const { address, chain } = useAccount();
  const { logout } = useAuth();
  const { profileData, setUserData } = useProfile();
  const { registerUserWeb3 } = useRegisterUserWeb3();
  const { UpdateUserVerifyStatusAPI } = useProfileAPI();

  const [verified, setVerified] = useState(profileData?.verified);

  useEffect(() => {
    setVerified(profileData?.verified);
  }, [profileData]);

  const handleDisconnect = () => {
    logout();
  };

  // TODO: Make sure Verify button is hidden when user is verified
  const handleVerify = async () => {
    const user = {
      id: profileData?.id,
      chain_id: profileData?.chain_id,
      wallet_address: profileData?.wallet_address,
      moralis_id: profileData?.moralis_id,
    };

    const user_hash = Web3.utils.sha3(JSON.stringify(user));
    const response = await registerUserWeb3({ user_hash: user_hash ?? "" });

    if (response !== undefined && response !== null) {
      const verified_user = UpdateUserVerifyStatusAPI({ verified: true });
      if (verified_user === undefined && verified_user === null) {
        setUserData(verified_user);
      }
    }
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
                {truncateAddress({ address, start: 8, end: 8 })}
              </Typography>
            </Grid>
          </Grid>

          <Grid display="flex" flexDirection="row" gap="15px">
            <Button
              onClick={() => {
                handleVerify();
              }}
              variant="contained"
              color="primary"
              disabled={verified}
            >
              Verify
            </Button>

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
