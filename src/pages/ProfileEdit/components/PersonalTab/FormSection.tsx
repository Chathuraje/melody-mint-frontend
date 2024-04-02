import { Grid, TextField } from "@mui/material";

export const FormSection = () => {
  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Website"
          variant="outlined"
          // Assuming description is passed as prop or fetched from somewhere
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="Description"
          variant="outlined"
          // Assuming description is passed as prop or fetched from somewhere
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
          multiline
          rows={4}
        />
      </Grid>
    </>
  );
};
