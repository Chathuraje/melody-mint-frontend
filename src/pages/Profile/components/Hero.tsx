import { Unstable_Grid2 as Grid } from "@mui/material";
import ProfileHeroPlaceholder from "@/assets/profile/profile-hero-palceholder.webp";

export const Hero = () => {
  const ProfileHero = {
    backgroundImage: `url(${ProfileHeroPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid
      display="flex"
      style={ProfileHero}
      height="350px"
      padding="10px"
      flexDirection="column"
      alignItems="end"
      justifyContent="end"
    ></Grid>
  );
};
