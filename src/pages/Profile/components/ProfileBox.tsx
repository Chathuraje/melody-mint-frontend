import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material/";
import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";
import { ProfileImage } from "@/components/ui/ProfileImage";
import ProfileImagePlaceholder from "@/assets/profile/profile-placeholder.svg";

export const ProfileBox = () => {
  return (
    <>
      <ProfileImage src={ProfileImagePlaceholder} />
      <Typography fontSize="30px" fontWeight="600" color="#000000">
        Artist username
      </Typography>
      <Grid display="flex" flexDirection="row" gap="4px">
        <Grid display="flex" flexDirection="row">
          <Grid alignContent="center">4rgg...gd631</Grid>
          <IconButton aria-label="Ethereum">
            <img
              src={EthLogo}
              alt="Icon eth badge"
              width="20px"
              height="20px"
            />
          </IconButton>
        </Grid>
        <Grid alignContent="center">Joined Jan 2023</Grid>
      </Grid>
    </>
  );
};
