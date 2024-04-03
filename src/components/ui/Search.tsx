import { Grid, TextField } from "@mui/material";

interface SearchProps {
  size?: "small" | "medium" | undefined;
}

export const Search = (props: SearchProps) => {
  const { size } = props;

  return (
    <Grid display="flex" gap="35px" flexDirection="column" width="100%">
      <TextField
        fullWidth
        size={size || "medium"}
        label="Search for Marketplace"
        id="searchMarketplace"
        placeholder="Search for marketplace"
      />
    </Grid>
  );
};
