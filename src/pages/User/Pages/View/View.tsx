import { ProfileHero } from "@/components/ui/ProfileHero";
import { Container, Grid } from "@mui/material";
import { ProfileDetails } from "./components/ProfileDetails";
import { ArtistToggle } from "./components/ArtistToggle";
import { UserProvider } from "./provider/UserProvider";

export const View = () => {
  return (
    <UserProvider>
      <ProfileHero height="350px" />

      <Container>
        <Grid display="flex" flexDirection="column" gap="25px">
          <ProfileDetails />
          <ArtistToggle />
        </Grid>
      </Container>
    </UserProvider>
  );
};
