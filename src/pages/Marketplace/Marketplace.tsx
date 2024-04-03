import { Container, Grid } from "@mui/material";
import { MarketplaceFilter } from "./components/MarketplaceFilter";
import { Pagination } from "@/components/ui/Pagination";
import { SubPageHeaders } from "@/components/SubPageHeaders";
import { MarketplaceCard } from "@/components/MarketplaceCard";

export const Marketplace = () => {
  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Melody Mint marketplace"
            subtitle="m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do"
          />
          <MarketplaceFilter />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left">
            {[...Array(5)].map((_, index) => (
              <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                <MarketplaceCard name="Train the Trainer" floor={14.34} />
              </Grid>
            ))}
          </Grid>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
