import { Grid, TextField } from "@mui/material";

export const ListForSaleForm = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      gap="20px"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <Grid display="flex" flexDirection="row" gap="25px" width="100%">
        <TextField
          fullWidth
          label="Starting Price"
          variant="outlined"
          value="JohnDoe"
        />
        <TextField
          fullWidth
          label="Duration"
          variant="outlined"
          value="JohnDoe"
        />
      </Grid>
    </Grid>
  );
};
