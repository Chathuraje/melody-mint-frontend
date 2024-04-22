import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProfileMenuItem } from "@/components/ui/ProfileMenuItem";
import { useAuth } from "@/hooks/useAuth";
import { truncateAddress } from "@/utils/truncateAddress";
import { Logout, Paid, Settings } from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";
import { ChainIcon } from "connectkit";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const UserPopup = () => {
  const { address, chain } = useAccount();
  const truncatedAddress = truncateAddress({ address });
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/user/${user?.id}`);
  };

  const handleNewFundraiserClick = () => {
    navigate("/fundraisers/create");
  };

  const handleSettingsClick = (activeTab: number) => {
    navigate(`/user/${user?.id}/update/${activeTab}`);
  };

  const handleLogoutClick = () => {
    logout();
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

          <ProfileMenuItem
            mainText={truncatedAddress}
            subText="Connected"
            onClick={() => handleSettingsClick(5)}
            icon={<ChainIcon id={chain?.id} size="25px" />}
          />
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
            onClick={() => handleSettingsClick(1)}
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
