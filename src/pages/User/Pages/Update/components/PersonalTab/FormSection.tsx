import { Grid, TextField } from "@mui/material";
import { useProfile } from "../../../../hooks/useProfile";

export const FormSection = () => {
  const { profileData } = useProfile();

  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Website"
          variant="outlined"
          value={profileData?.website}
        />
      </Grid>
    </>
  );
};
