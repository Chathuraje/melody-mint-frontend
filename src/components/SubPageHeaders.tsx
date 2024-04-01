import { Grid, TextField, Typography } from "@mui/material";

interface SubPageHeadersProps {
  title: string;
  subtitle: string;
}

export const SubPageHeaders = (props: SubPageHeadersProps) => {
  return (
    <Grid display="flex" gap="35px" flexDirection="column">
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        paddingTop="45px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid display="flex" flexDirection="column" alignItems="left">
          <Typography variant="h2">{props.title}</Typography>
          <Typography variant="subtitle2">{props.subtitle}</Typography>
        </Grid>
      </Grid>
      <Grid display="flex" paddingBottom="25px">
        <TextField
          fullWidth
          label="Search for Marketplace"
          id="searchMarketplace"
          placeholder="Search for marketplace"
        />
      </Grid>
    </Grid>
  );
};
