import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProfileMenuItem } from "@/components/ui/ProfileMenuItem";
import { useAuth } from "@/hooks/useAuth";
import { useNotification } from "@/hooks/useNotifications";
import { truncateAddress } from "@/utils/truncateAddress";
import { Logout, Paid, Settings } from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";
import { ChainIcon, ConnectKitButton } from "connectkit";
import { useNavigate } from "react-router-dom";
import { useAccount, useDisconnect } from "wagmi";

export const UserPopup = () => {
  const { address, chain } = useAccount();
  const truncatedAddress = truncateAddress(address);
  const { user } = useAuth();

  const { disconnect } = useDisconnect();

  const navigate = useNavigate();

  const { sendNotification } = useNotification();

  const handleProfileClick = () => {
    navigate(`/user/${user?.id}`);
  };

  const handleNewFundraiserClick = () => {
    navigate("/fundraisers/create");
  };

  const handleSettingsClick = () => {
    navigate(`/user/${user?.id}/edit`);
  };

  const handleLogoutClick = () => {
    sendNotification("success", "Successfully logged out. Disconnecting...");
    disconnect();
  };

  let userFullName = "No Name";
  if (user && user.first_name !== null && user.last_name !== null) {
    userFullName = (user.first_name || "") + " " + (user.last_name || "");
  }

  return (
    <>
      <Grid display="flex" flexDirection="column" gap="8px">
        <Grid display="flex" flexDirection="column" gap="10px">
          <ProfileMenuItem
            mainText={userFullName || "User"}
            subText="Profile"
            onClick={handleProfileClick}
            icon={<ProfileImage dimentions="25px" />}
          />

          <ConnectKitButton.Custom>
            {({ show }) => {
              return (
                <ProfileMenuItem
                  mainText={truncatedAddress}
                  subText="Connected"
                  onClick={show}
                  icon={<ChainIcon id={chain?.id} size="25px" />}
                />
              );
            }}
          </ConnectKitButton.Custom>
        </Grid>

        <Divider />

        <Grid display="flex" flexDirection="column" gap="8px">
          <ProfileMenuItem
            mainText="Create New Fundraiser"
            onClick={handleNewFundraiserClick}
            icon={<Paid fontSize="small" />}
          />

          <ProfileMenuItem
            mainText="Settings"
            onClick={handleSettingsClick}
            icon={<Settings fontSize="small" />}
          />

          <ProfileMenuItem
            mainText="Logout"
            onClick={handleLogoutClick}
            icon={
              <Logout
                fontSize="small"
                sx={{
                  color: "#ba000d",
                }}
              />
            }
            textColor="#ba000d"
          />
        </Grid>
      </Grid>
    </>
  );
};
