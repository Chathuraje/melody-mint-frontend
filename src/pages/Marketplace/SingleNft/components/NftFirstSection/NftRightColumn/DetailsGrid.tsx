import { Grid, Typography } from "@mui/material";

export const DetailsGrid = () => {
  return (
    <Grid display="flex" flexDirection="column">
      <Typography variant="subtitle1" fontSize="15px" color="#6D6D6D">
        Artist name
      </Typography>
      <Typography variant="h6" fontSize="35px">
        Music title
      </Typography>
      <Typography variant="h6" fontSize="15px">
        Token owner
      </Typography>
    </Grid>
  );
};
