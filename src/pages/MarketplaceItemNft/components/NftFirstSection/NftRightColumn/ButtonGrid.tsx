import { Button, Grid } from "@mui/material";

export const ButtonGrid = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      alignItems="left"
      justifyContent="left"
      gap="10px"
    >
      <Button fullWidth variant="contained" color="primary">
        Buy now
      </Button>
      <Button fullWidth variant="outlined" color="primary">
        Make offer
      </Button>
    </Grid>
  );
};
