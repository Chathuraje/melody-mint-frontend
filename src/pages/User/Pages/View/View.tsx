import { ProfileHero } from "@/components/ui/ProfileHero";
import { Container, Grid } from "@mui/material";
import { ProfileDetails } from "./components/ProfileDetails";
import { ArtistToggle } from "./components/ArtistToggle";
import { useEffect } from "react";
import { useProfile } from "../../hooks/useProfile";
import { useGetUserAPI } from "@/hooks/API/useUserAPI";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

export const View = () => {
  const { userData, setUserData } = useProfile();
  const { Userid } = useParams();
  const { GetUserAPI } = useGetUserAPI();

  useEffect(() => {
    const controller = new AbortController();
    const getUserData = async (user_id: string) => {
      const data = await GetUserAPI(user_id, controller.signal);
      setUserData(data);
    };

    if (Userid !== undefined) {
      getUserData(Userid);
    }

    return () => {
      console.log("User data cleanup");
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const imageURI = `${API_URL}/res/images?image_name=${userData?.profile_hero}`;

  return (
    <Grid>
      <ProfileHero src={imageURI} height="350px" />

      <Container>
        <Grid display="flex" flexDirection="column" gap="25px">
          <ProfileDetails />
          <ArtistToggle />
        </Grid>
      </Container>
    </Grid>
  );
};
