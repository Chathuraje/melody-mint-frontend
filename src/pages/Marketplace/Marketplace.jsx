import { Container, Grid } from "@mui/material";
import { MarketplaceHeader } from "./components/MarketplaceHeader";
import { MarketplaceFilter } from "./components/MarketplaceFilter";
import { Pagination } from "@/components/ui/Pagination";

export const Marketplace = () => {
  return (
    <Container>
      <Grid display="flex" gap="22px" flexDirection="column">
        <Grid>
          <MarketplaceHeader />
          <MarketplaceFilter />
        </Grid>
        <Grid display="flex" gap="52px" flexDirection="column">
          {/* <FundraiserSection amount={12} /> */}
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
