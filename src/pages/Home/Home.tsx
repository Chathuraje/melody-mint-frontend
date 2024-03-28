import { Box } from "@mui/material";
import { Hero } from "./components/Hero/Hero";
import { Cta } from "./components/CTA/Cta";

export const Home = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Hero />
      <Cta />
    </Box>
  );
};
