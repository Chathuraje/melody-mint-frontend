import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import AnalystImagePlaceholder from "@/assets/analyst/single-collection-image-palceholder.png";

export const AnalystHero = () => {
  const AnalystImage = {
    backgroundImage: `url(${AnalystImagePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Container>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        padding="20px"
      >
        <Grid display="flex" flexDirection="column">
          <Grid
            display="flex"
            style={AnalystImage}
            width="160px"
            height="160px"
            padding="10px"
            flexDirection="column"
            alignItems="flex-end"
          ></Grid>
          <Typography
            variant="h4"
            color="white"
            fontSize="28px"
            font-weight="600"
          >
            Music track name
          </Typography>
          <Typography variant="subtitle2" color="white" fontSize="18px">
            Artist name
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};
