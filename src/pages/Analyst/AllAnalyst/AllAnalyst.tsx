import { SubPageHeaders } from "@/components/SubPageHeaders";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Pagination } from "@/components/ui/Pagination";
import { AnalystFilter } from "./components/AnalystFilter";
import { AnalystSection } from "./components/AnalystSection";

export const AllAnalyst = () => {
  return (
    <Container>
      <Grid display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Music analyst"
            subtitle="Invest in Funds created by Music artist and earn royalties"
          />
          <AnalystFilter />
        </Grid>
        <Grid display="flex" gap="52px" flexDirection="column">
          <AnalystSection amount={12} />
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
