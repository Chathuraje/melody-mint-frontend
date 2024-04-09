import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "@/components/Logo";
import { HomeSocial } from "@/components/HomeSocial";
import { Navigation } from "@/components/Navigation";
import "./Footer.css";

export const Footer = () => {
  return (
    <Grid bgcolor="#06102b" color="white" padding="75px 0 0 0" marginTop="70px">
      <Container>
        <Grid display="flex" flexDirection="column" gap="15px">
          <Grid
            display="flex"
            flexDirection="row"
            gap="15px"
            justifyContent="space-between"
            paddingBottom="15px"
          >
            <Grid display="flex" flexDirection="column" gap="15px">
              <Logo width={100} />
              <Grid>contact@melodymints.io</Grid>
              <HomeSocial />
            </Grid>

            <Grid display="flex" flexDirection="column" gap="10px">
              <Navigation type="footer1" />
            </Grid>
            <Grid display="flex" flexDirection="column" gap="10px">
              <Navigation type="footer2" />
            </Grid>
            <Grid display="flex" flexDirection="column" gap="10px">
              <Navigation type="footer3" />
            </Grid>
          </Grid>
          <hr />
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="0  0 15px 0"
            fontSize="15px"
          >
            <Grid>Melody-Mint 2024</Grid>
            <Grid>Designed & developed by Team</Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
