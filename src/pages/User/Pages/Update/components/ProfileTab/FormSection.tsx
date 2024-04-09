import { Grid, TextField } from "@mui/material";

export const FormSection = () => {
  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Username"
          variant="outlined"
          // Assuming username is passed as prop or fetched from somewhere
          value="JohnDoe" // Example username
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
