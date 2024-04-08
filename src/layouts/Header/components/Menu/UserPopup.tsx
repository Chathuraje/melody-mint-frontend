import { ProfileImage } from "@/components/ui/ProfileImage";
import { ProfileMenuItem } from "@/components/ui/ProfileMenuItem";
import { useAuth } from "@/hooks/useAuth";
import { truncateAddress } from "@/utils/truncateAddress";
import { Logout, Paid, Settings } from "@mui/icons-material";
import { Divider, Grid } from "@mui/material";
import { ChainIcon, ConnectKitButton } from "connectkit";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const UserPopup = () => {
  const { address, chain } = useAccount();
  const truncatedAddress = truncateAddress(address);

  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate(`/user/${address}`);
  };

  const handleNewFundraiserClick = () => {
    navigate("/fundraisers/create");
  };

  const handleSettingsClick = () => {
    navigate(`/user/${address}/edit`);
  };

  return (
    <>
      <Grid display="flex" flexDirection="column" gap="8px">
        <Grid display="flex" flexDirection="column" gap="10px">
          <ProfileMenuItem
            mainText="Chathura Ekanayake"
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
            onClick={logout}
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
