import { Container, Unstable_Grid2 as Grid } from "@mui/material/";
import { ProfileDetails } from "./components/ProfileDetails";
import { ArtistToggle } from "./components/ArtistToggle";
import { ProfileHero } from "@/components/ui/ProfileHero";
import ProfileHeroPlaceholder from "@/assets/profile/profile-hero-palceholder.webp";

export const Profile = () => {
  return (
    <Grid>
      <ProfileHero src={ProfileHeroPlaceholder} height="350px" />

      <Container>
        <Grid display="flex" flexDirection="column" gap="25px">
          <ProfileDetails />
          <ArtistToggle />
        </Grid>
      </Container>
    </Grid>
  );
};
