import { Grid, TextField } from "@mui/material";

export const SocialSection = () => {
  return (
    <>
      <Grid>
        <TextField
          fullWidth
          label="Spotify channel link"
          variant="outlined"
          // Assuming username is passed as prop or fetched from somewhere
          value="JohnDoe" // Example username
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="YouTube channel link"
          variant="outlined"
          // Assuming username is passed as prop or fetched from somewhere
          value="JohnDoe" // Example username
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="Discord server link"
          variant="outlined"
          // Assuming description is passed as prop or fetched from somewhere
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="X account link"
          variant="outlined"
          // Assuming description is passed as prop or fetched from somewhere
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
        />
      </Grid>

      <Grid>
        <TextField
          fullWidth
          label="Instagram account link"
          variant="outlined"
          // Assuming description is passed as prop or fetched from somewhere
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
        />
      </Grid>
    </>
  );
};
