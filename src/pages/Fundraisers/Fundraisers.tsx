import { Unstable_Grid2 as Grid, Container } from "@mui/material";
import { FundraisersFilter } from "./components/FundraisersFilter";
import { Pagination } from "@/components/ui/Pagination";
import { SubPageHeaders } from "@/components/SubPageHeaders";
import FundRaiserCard from "@/components/FundRaiserCard";

export const Fundraisers = () => {
  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Explore Fundraisers"
            subtitle="Invest in Funds created by Music artist and earn royalties"
          />
          <FundraisersFilter />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left">
            {[...Array(8)].map((_, index) => (
              <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                <FundRaiserCard />
              </Grid>
            ))}
          </Grid>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
