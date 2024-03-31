import { SubPageHeaders } from "@/layouts/Global/SubPageHeaders";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { AnalystFilter } from "./components/AnalystFilter";
import { AnalystSection } from "./components/AnalystSection";
import { Pagination } from "@/components/ui/Pagination";

export const Analyst = () => {
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
