import { Grid, Typography } from "@mui/material";

export const PopupLeft = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="left"
      margin="70px"
      gap="20px"
    >
      <Typography variant="h2" color="white" fontSize="50px">
        Let’s Begin by choosing your role
      </Typography>
      <Typography variant="subtitle1">
        The registration process starts with selecting your role
      </Typography>
    </Grid>
  );
};
