import { Grid, TextField } from "@mui/material";

export const UniqueSection = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      gap="15px"
      width="100%"
      justifyContent="space-between"
    >
      <Grid xs={6}>
        <TextField
          fullWidth
          label="User ID"
          variant="outlined"
          value="660b2628dd74f825b3a5edc9"
          InputProps={{
            readOnly: true,
            disabled: true,
          }}
        />
      </Grid>
      <Grid xs={5.5}>
        <TextField
          fullWidth
          label="Joined Date"
          variant="outlined"
          value="April 2, 2024"
          InputProps={{
            readOnly: true,
            disabled: true,
          }}
        />
      </Grid>
    </Grid>
  );
};
