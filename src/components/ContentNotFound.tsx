import { Button, Container, Grid, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

export const ContentNotFound = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        gap="8px"
        maxWidth="740px"
        margin="auto"
      >
        <Grid>
          <ErrorOutlineIcon fontSize="large" />
        </Grid>
        <Grid
          display="flex"
          flexDirection="column"
          alignItems="center"
          gap="5px"
        >
          <Typography variant="h3" color="#6D6D6D">
            Currently no Data to Display!
          </Typography>
          <Typography
            variant="subtitle1"
            color="#6D6D6D"
            fontSize="14px"
            textAlign="center"
          >
            Currently you have not collected any Melody Mint tokens yet!
            Currently you have not invested in any fundraisers yet Currently you
            have not invested in any fundraisers yet
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary">
            Relaoad
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
