import { Grid, TextField } from "@mui/material";
import { useUser } from "../../hooks/useUser";

export const FormSection = () => {
  const { userData } = useUser();

  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          value={userData?.username}
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          value={userData?.artist_description}
          multiline
          rows={15}
        />
      </Grid>
    </>
  );
};
