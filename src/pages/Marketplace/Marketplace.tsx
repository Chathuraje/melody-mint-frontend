import { Container, Grid } from "@mui/material";
import { MarketplaceFilter } from "./components/MarketplaceFilter";
import { Pagination } from "@/components/ui/Pagination";
import { MarketpaceSection } from "@/layouts/Global/MarketplaceSection/MarketpaceSection";
import { SubPageHeaders } from "@/components/SubPageHeaders";

export const Marketplace = () => {
  return (
    <Container>
      <Grid display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Melody Mint marketplace"
            subtitle="m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do"
          />
          <MarketplaceFilter />
        </Grid>
        <Grid display="flex" gap="52px" flexDirection="column">
          <MarketpaceSection amount={12} />
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
