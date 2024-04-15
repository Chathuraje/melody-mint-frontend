import { Unstable_Grid2 as Grid, Typography } from "@mui/material/";
import { ProfileBox } from "./ProfileBox";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { useProfile } from "@/pages/User/hooks/useProfile";

export const ProfileDetails = () => {
  const { userData, populateSocialIcons } = useProfile();

  const { names, hrefs } = userData
    ? populateSocialIcons(userData)
    : { names: [], hrefs: {} };

  return (
    <Grid
      position="relative"
      display="flex"
      flexDirection="column"
      marginTop="-100px"
      gap="20px"
    >
      <Grid
        container
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid xs={6} display="flex" flexDirection="column" gap="5px">
          <ProfileBox />
        </Grid>
        <Grid
          xs={6}
          display="flex"
          flexDirection="row"
          alignItems="end"
          justifyContent="flex-end"
        >
          <SocialIcons names={names} hrefs={hrefs} />
        </Grid>
      </Grid>

      <Grid container display="flex" flexDirection="row">
        <Typography
          variant="subtitle1"
          fontSize="16px"
          fontWeight="400"
          color="#000000"
        >
          {userData?.artist_description || "Artist description"}
        </Typography>
      </Grid>
    </Grid>
  );
};
