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
    <Grid style={HeroBackStyle}>
      <Container>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding="72px 0"
        >
          <Grid display="flex">
            <TextWrapper />
          </Grid>
          <Grid display="flex">
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
