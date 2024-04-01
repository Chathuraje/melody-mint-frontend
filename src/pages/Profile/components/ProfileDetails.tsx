import { Unstable_Grid2 as Grid, Typography } from "@mui/material/";
import { ProfileBox } from "./ProfileBox";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const ProfileDetails = () => {
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
          <SocialIcons
            names={["spotify", "instagram", "youtube", "x", "website"]}
          />
        </Grid>
      </Grid>

      <Grid container display="flex" flexDirection="row">
        <Typography
          variant="subtitle1"
          fontSize="16px"
          fontWeight="400"
          color="#000000"
        >
          Celebrating the vibrant fusion of creativity and technology, I am an
          impassioned solo artist on an invigorating quest to weave enchanting
          melodies that stir the soul and ignite the imagination. With an
          unwavering dedication to pushing artistic boundaries and captivating
          hearts, I've ventured into the captivating realm of NFTs, where every
          token is a key to unlock a universe of my musical expressions. Through
          this pioneering journey, I invite you to join me in shaping the future
          of music, where innovation meets inspiration, and together, we carve
          an indelible mark on the canvas of sonic artistry. Let's embark on
          this extraordinary odyssey, where dreams are composed, and legacies
          are harmonized, as we craft an eternal symphony of creativity and
        </Typography>
      </Grid>
    </Grid>
  );
};
