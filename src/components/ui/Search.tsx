import { Grid, TextField } from "@mui/material";

export const Search = () => {
  return (
    <Grid display="flex" gap="35px" flexDirection="column" width="100%">
      <TextField
        fullWidth
        label="Search for Marketplace"
        id="searchMarketplace"
        placeholder="Search for marketplace"
      />
    </Grid>
  );
};
