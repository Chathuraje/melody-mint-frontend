import { ProfileHero } from "@/components/ui/ProfileHero";
import { ProfileImage } from "@/components/ui/ProfileImage";
import { Grid } from "@mui/material";

export const ImageSection = () => {
  return (
    <Grid
      display="flex"
      gap="20px"
      justifyContent="space-between"
      alignItems="center"
    >
      <ProfileImage upload src="" />
      <ProfileHero border src="" upload height="200px" width="550px" />
    </Grid>
  );
};
