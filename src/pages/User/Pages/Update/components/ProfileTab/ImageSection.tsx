import { ProfileHero } from "@/components/ui/ProfileHero";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { useUser } from "@/pages/User/hooks/useUser";
import { Grid } from "@mui/material";

export const ImageSection = () => {
  const { userData } = useUser();

  return (
    <Grid
      display="flex"
      gap="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <ProfileImage upload src={userData?.profile_image} />
      <ProfileHero
        border
        src={userData?.profile_hero}
        upload
        height="200px"
        width="550px"
      />
    </Grid>
  );
};