import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { InfoSection } from "./components/InfoSection";
import { FilterSection } from "./components/FilterSection";
import { Pagination } from "@/components/ui/Pagination";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Hero } from "./components/Hero";

export const MarketplaceItem = () => {
  //   const { collectionId } = useParams();

  return (
    <Grid display="flex" gap="22px" flexDirection="column">
      <Hero />

      <Container>
        <Grid container display="flex" flexDirection="column" gap="20px">
          <InfoSection />
          <FilterSection />
          <Grid container display="flex" gap="52px" flexDirection="column">
            <Grid container padding="0px" margin="0px" spacing={2}>
              {[...Array(15)].map((_, index) => (
                <Grid key={index} xs={12} sm={6} md={3}>
                  <MarketplaceCard
                    nft
                    name="#1243"
                    currentPrice={1500}
                    lastPrice={1000}
                  />
                </Grid>
              ))}
            </Grid>
            <Pagination />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
