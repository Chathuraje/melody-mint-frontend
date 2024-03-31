import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import AnalystHeroPlaceholder from "@/assets/analyst/single-collection-hero-palceholder.webp";
import { AnalystHero } from "./components/AnalystHero";
import { AnalystStats } from "./components/AnalystStats";
import { AnalystChart } from "./components/AnalystChart";
import { AnalystStreamTable } from "./components/AnalystStreamTable";

export const AnalystItem = () => {
  const AnalystHeroImage = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${AnalystHeroPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid>
      <Grid
        display="flex"
        style={AnalystHeroImage}
        height="400px"
        padding="10px"
        flexDirection="column"
        alignItems="end"
        justifyContent="end"
      >
        <AnalystHero />
      </Grid>

      <Container>
        <Grid display="flex" flexDirection="column" gap="55px">
          <AnalystStats />
          <AnalystChart />
          <AnalystStreamTable />
        </Grid>
      </Container>
    </Grid>
  );
};
