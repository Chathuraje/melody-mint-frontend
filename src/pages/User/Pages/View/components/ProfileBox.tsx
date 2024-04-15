import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material/";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { truncateAddress } from "@/utils/truncateAddress";
import { ChainIcon } from "connectkit";
import { useProfile } from "@/pages/User/hooks/useProfile";

const API_URL = import.meta.env.VITE_API_URL;

export const ProfileBox = () => {
  const { userData } = useProfile();

  const formattedJoinedDate = userData?.joined_date
    ? new Date(userData?.joined_date).toLocaleString("default", {
        month: "short",
        year: "numeric",
      })
    : "...";

  const imageURL = `${API_URL}/res/images?image_name=${userData?.profile_image}`;

  return (
    <>
      <ProfileImage border src={imageURL} />
      <Typography fontSize="30px" fontWeight="600" color="#000000">
        {userData?.username || "Username"}
      </Typography>
      <Grid display="flex" flexDirection="row" gap="4px">
        <Grid display="flex" flexDirection="row" gap="15px">
          <Grid alignContent="center">
            {truncateAddress(userData?.wallet_address) || "0x00....0000"}
          </Grid>
          <IconButton aria-label="Chain Logo">
            {<ChainIcon id={userData?.chain_id || 1} />}
          </IconButton>
        </Grid>
        <Grid alignContent="center">Joined {formattedJoinedDate}</Grid>
      </Grid>
    </>
  );
};
