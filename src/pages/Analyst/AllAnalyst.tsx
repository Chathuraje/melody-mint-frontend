import { SubPageHeaders } from "@/components/SubPageHeaders";
import { Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Pagination } from "@/components/ui/Pagination";
import { AnalystFilter } from "./components/AnalystFilter";
import { AnalystCard } from "./components/AnalystCard";

export const AllAnalyst = () => {
  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Music analyst"
            subtitle="Invest in Funds created by Music artist and earn royalties"
          />
          <AnalystFilter />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left" width="100%">
            {[...Array(5)].map((_, index) => (
              <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                <AnalystCard />
              </Grid>
            ))}
          </Grid>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
