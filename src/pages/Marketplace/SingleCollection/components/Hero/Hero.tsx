import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import CollectionHeroPlaceholder from "@/assets/marketplace/single-collection-hero-palceholder.webp";
import { MarketplaceCollectionInfo } from "./MarketplaceCollectionInfo";
import { MarketplaceStatics } from "./MarketplaceStatics";

export const Hero = () => {
  const CollectionHero = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${CollectionHeroPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid
      display="flex"
      style={CollectionHero}
      height="400px"
      padding="10px"
      flexDirection="column"
      alignItems="end"
      justifyContent="end"
    >
      <Container>
        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          padding="20px"
        >
          <MarketplaceCollectionInfo />
          <MarketplaceStatics />
        </Grid>

        <Grid></Grid>
      </Container>
    </Grid>
  );
};
