import { FundraiserSection } from "@/layouts/Global/FundraiserSection/FundraiserSection";
import { Unstable_Grid2 as Grid, Container } from "@mui/material";
import { FundraisersFilter } from "./components/FundraisersFilter";
import { Pagination } from "@/components/ui/Pagination";
import { SubPageHeaders } from "@/layouts/Global/SubPageHeaders";

export const AllFundraisers = () => {
  return (
    <Container>
      <Grid display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Explore Fundraisers"
            subtitle="Invest in Funds created by Music artist and earn royalties"
          />
          <FundraisersFilter />
        </Grid>
        <Grid display="flex" gap="52px" flexDirection="column">
          <FundraiserSection amount={12} />
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
