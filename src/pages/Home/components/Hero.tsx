import {
  Box,
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";

import HeroImage from "@/assets/homepage/hero-image.webp";
import HeroBack from "@/assets/homepage/hero-back.webp";

export const Hero = () => {
  const HeroBackStyle = {
    backgroundImage: `url(${HeroBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const HeaderTextStyle = {
    background:
      "-webkit-linear-gradient(180deg, #fff 30%, rgba(255, 255, 255, 0.75) 90%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Grid style={HeroBackStyle}>
      <Container>
        <Grid display="flex" justifyContent="space-between" padding="72px 0">
          <Grid display="flex">
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="center"
              gap="32px"
            >
              <Typography variant="h1" style={HeaderTextStyle}>
                Invest & Earn with Music
              </Typography>
              <Typography variant="subtitle1">
                Invest in Funds created by Music artist and earn royalties
              </Typography>
              <Box
                alignItems="left"
                display="flex"
                gap="22px"
                justifyContent="left"
              >
                <Button variant="contained" color="secondary">
                  Start for free
                </Button>
                <Button variant="outlined" color="secondary">
                  Join as an artist
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Grid display="flex">
            <Box component="img" src={HeroImage} alt="Hero Image" />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
