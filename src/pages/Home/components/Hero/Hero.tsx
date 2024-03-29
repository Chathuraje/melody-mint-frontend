import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";

import HeroImage from "@/assets/homepage/hero-image.webp";
import HeroBack from "@/assets/homepage/hero-back.webp";
import { TextWrapper } from "./TextWrapper";

export const Hero = () => {
  const HeroBackStyle = {
    backgroundImage: `url(${HeroBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid display="flex" style={HeroBackStyle}>
      <Container>
        <Grid container display="flex" flexDirection="row" alignItems="center">
          <Grid display="flex" md={7}>
            <TextWrapper />
          </Grid>
          <Grid display="flex" md={5} alignItems="flex-end">
            <Box
              component="img"
              src={HeroImage}
              alt="Hero Image"
              height="100%"
              width="100%"
            />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
