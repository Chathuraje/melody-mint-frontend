import { FundraiserSection } from "@/layouts/Global/FundraiserSection/FundraiserSection";
import { Unstable_Grid2 as Grid, Container } from "@mui/material";
import { FundraisersHeader } from "./components/FundraisersHeader";
import { FundraisersFilter } from "./components/FundraisersFilter";
import { Pagination } from "@/components/ui/Pagination";

export const AllFundraisers = () => {
  return (
    <Container>
      <Grid display="flex" gap="22px" flexDirection="column">
        <Grid>
          <FundraisersHeader />
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
