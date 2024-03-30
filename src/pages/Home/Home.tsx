import { Hero } from "./components/Hero/Hero";
import { Cta } from "./components/CTA/Cta";
import { HomeFundraise } from "./components/HomeFundraise/HomeFundraise";
import { FeaturesSection } from "./components/FeaturesSection/FeaturesSection";
import { Cta2 } from "./components/CTA2/Cta2";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Faq } from "./components/FAQ/Faq";

export const Home = () => {
  return (
    <Grid display="flex" gap={10} flexDirection="column">
      <Hero />

      <Container>
        <Grid display="flex" gap={10} flexDirection="column">
          <Cta />
          <HomeFundraise />
          <FeaturesSection />
          <Cta2 />
          <Faq />
        </Grid>
      </Container>
    </Grid>
  );
};
