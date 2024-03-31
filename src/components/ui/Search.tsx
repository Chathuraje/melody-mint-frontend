import { FormControl, Unstable_Grid2 as Grid, TextField } from "@mui/material";

export const Search = () => {
  return (
    <Grid display="flex" width="100%">
      <FormControl sx={{ m: 1 }} size="small">
        <TextField
          fullWidth
          id="outlined-basic"
          label="Search"
          variant="outlined"
          size="small"
        />
      </FormControl>
    </Grid>
  );
};
