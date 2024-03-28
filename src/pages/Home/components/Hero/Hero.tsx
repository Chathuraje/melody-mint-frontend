import { Grid } from "@mui/material";

import "./Hero.css";
import HeroImage from "@/assets/homepage/hero-image.webp";
import HeroBack from "@/assets/homepage/hero-back.webp";
import TextWrapper from "./TextWrapper";

export const Hero = () => {
  const HeroBackStyle = {
    backgroundImage: `url(${HeroBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid
      marginTop={-11.1}
      display="flex"
      style={HeroBackStyle}
      padding="0 0 0 65px"
      width="100%"
      height="100vh"
    >
      <Grid container>
        <Grid
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <TextWrapper />
        </Grid>
        <Grid
          xs={6}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        >
          <img src={HeroImage} alt="Hero Image" className="hero-image" />
        </Grid>
      </Grid>
    </Grid>
  );
};
