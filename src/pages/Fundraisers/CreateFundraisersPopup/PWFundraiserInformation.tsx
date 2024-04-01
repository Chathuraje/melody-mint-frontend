import { Grid, TextField, Typography } from "@mui/material";

export const PWFundraiserInformation = () => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      padding="70px"
      gap="30px"
      alignItems="left"
      justifyContent="left"
    >
      <Typography
        variant="subtitle1"
        color="black"
        fontSize="19px"
        textAlign="left"
      >
        Fill in the information regarding the fundraiser
      </Typography>

      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Grid
        container
        xs={12}
        flexDirection="row"
        display="flex"
        alignItems="left"
        gap="25px"
        height="200px"
        width="100%"
      >
        sdasd
      </Grid>
    </Grid>
  );
};
