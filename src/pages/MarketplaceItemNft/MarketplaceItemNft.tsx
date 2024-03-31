import { Container, Grid } from "@mui/material";
import { NftFirstSection } from "./components/NftFirstSection";
import { NftSecondSection } from "./components/NftSecondSection";
import { NftThridSection } from "./components/NftThridSection";

export const MarketplaceItemNft = () => {
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
