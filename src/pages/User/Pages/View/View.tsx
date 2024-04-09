import { ProfileHero } from "@/components/ui/ProfileHero";
import { Container, Grid } from "@mui/material";
import { ProfileDetails } from "./components/ProfileDetails";
import { ArtistToggle } from "./components/ArtistToggle";
import { useUser } from "@/pages/User/hooks/useUser";

export const View = () => {
  const { userData } = useUser();

  return (
    <>
      <ProfileHero src={userData?.profile_hero} height="350px" />

      <Container>
        <Grid display="flex" flexDirection="column" gap="25px">
          <ProfileDetails />
          <ArtistToggle />
        </Grid>
      </Container>
    </>
  );
};
