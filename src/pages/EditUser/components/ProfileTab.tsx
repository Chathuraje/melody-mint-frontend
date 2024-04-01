import { ProfileEditTab } from "@/components/ProfileEditTab";
import { ImageSection } from "./ProfileTab/ImageSection";
import { UniqueSection } from "./ProfileTab/UniqueSection";
import { FormSection } from "./ProfileTab/FormSection";
import { Grid } from "@mui/material";

export const ProfileTab = () => {
  return (
    <ProfileEditTab
      title="Profile Details"
      description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
    >
      <Grid
        display="flex"
        flexDirection="column"
        justifyContent="left"
        gap="65px"
      >
        <ImageSection />

        <Grid display="flex" flexDirection="column" gap="25px">
          <UniqueSection />
          <FormSection />
        </Grid>
      </Grid>
    </ProfileEditTab>
  );
};
