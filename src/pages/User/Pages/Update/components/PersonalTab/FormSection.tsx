import { Grid, TextField } from "@mui/material";
import { useUser } from "../../hooks/useUser";

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
