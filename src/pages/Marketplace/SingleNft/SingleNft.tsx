import { Container, Grid } from "@mui/material";
import { NftFirstSection } from "./components/NftFirstSection/NftFirstSection";
import { NftSecondSection } from "./components/NftSecondSection/NftSecondSection";
import { NftThridSection } from "./components/NftThirdSection/NftThridSection";

export const SingleNft = () => {
  return (
    <Container>
      <Grid
        container
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        width="100%"
        padding="25px 0px 0px 0px"
      >
        <NftFirstSection />
        <NftSecondSection />
        <NftThridSection />
      </Grid>
    </Container>
  );
};
