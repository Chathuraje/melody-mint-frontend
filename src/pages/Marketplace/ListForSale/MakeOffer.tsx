import { FormBox } from "@/components/FormBox";
import { Button, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { ListForSaleForm } from "./components/ListForSaleForm";
import { SummaryBox } from "./components/SummaryBox";
import { SingleCollectionCard } from "@/components/SingleCollectionCard";

export const MakeOffer = () => {
  return (
    <Container>
      <Grid display="flex" flexDirection="column" paddingTop="25px" gap="35px">
        <Grid display="flex" flexDirection="column" gap="15px">
          <FormBox
            title="List for Sale"
            description="Check for item trait changes and items flagged as stolen before a
offer is accepted"
          >
            <Grid
              display="flex"
              flexDirection="row"
              gap="35px"
              width="100%"
              justifyContent="space-between"
            >
              <Grid
                display="flex"
                flexDirection="column"
                gap="15px"
                width="75%"
              >
                <FormBox title="Sale Information">
                  <ListForSaleForm />
                </FormBox>
                <FormBox title="Summery">
                  <SummaryBox />
                </FormBox>
              </Grid>
              <Grid
                display="flex"
                flexDirection="column"
                gap="35px"
                width="25%"
              >
                <SingleCollectionCard />
                <Button variant="contained">Make Offer</Button>
              </Grid>
            </Grid>
          </FormBox>
        </Grid>
      </Grid>
    </Container>
  );
};
