import { Container, Unstable_Grid2 as Grid } from "@mui/material/";
import { Hero } from "./components/Hero";
import { ProfileDetails } from "./components/ProfileDetails";
import { ArtistToggle } from "./components/ArtistToggle";

export const Profile = () => {
  return (
    <Grid>
      <Hero />

      <Container>
        <Grid display="flex" flexDirection="column" gap="25px">
          <ProfileDetails />
          <ArtistToggle />
        </Grid>
      </Container>
    </Grid>
  );
};
