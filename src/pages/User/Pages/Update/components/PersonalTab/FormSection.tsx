import { useUser } from "@/pages/User/hooks/useUser";
import { Grid, TextField } from "@mui/material";

export const FormSection = () => {
  const { userData } = useUser();

  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Website"
          variant="outlined"
          value={userData?.website}
        />
      </Grid>
    </>
  );
};
