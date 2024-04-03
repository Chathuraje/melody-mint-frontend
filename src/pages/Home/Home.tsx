import { Hero } from "./components/Hero";
import { Cta } from "./components/Cta";
import { HomeFundraise } from "./components/HomeFundraise";
import { FeaturesSection } from "./components/FeaturesSection";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Faq } from "./components/Faq";
import CtaBack from "@/assets/homepage/cta-back.webp";
import CtaBack2 from "@/assets/homepage/cta-back2.webp";

export const Home = () => {
  return (
    <Grid display="flex" gap={10} flexDirection="column">
      <Hero />

      <Container>
        <Grid display="flex" gap={10} flexDirection="column">
          <Cta
            title="Become an artist, fund your music"
            subtitle="By starting a fundraiser, you can collect investments
          to fund your music"
            image={CtaBack}
          />
          <HomeFundraise />
          <FeaturesSection />
          <Cta
            title="This is where your music journey begins"
            subtitle="Start your music journey with Melody-Mint and gain the exposure to be a
            future superstar"
            image={CtaBack2}
          />
          <Faq />
        </Grid>
      </Container>
    </Grid>
  );
};
