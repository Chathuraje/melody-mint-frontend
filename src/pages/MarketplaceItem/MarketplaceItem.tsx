import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Hero } from "./components/Hero";
import { InfoSection } from "./components/InfoSection";
import { FilterSection } from "./components/FilterSection";
import { SingleCollectionSection } from "./components/SingleCollectionSection";
import { Pagination } from "@/components/ui/Pagination";

export const MarketplaceItem = () => {
  //   const { collectionId } = useParams();

  return (
    <Grid display="flex" gap="22px" flexDirection="column">
      <Hero />

      <Container>
        <Grid display="flex" flexDirection="column" gap="20px">
          <InfoSection />
          <FilterSection />
          <Grid display="flex" gap="52px" flexDirection="column">
            <SingleCollectionSection amount={25} />
            <Pagination />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
