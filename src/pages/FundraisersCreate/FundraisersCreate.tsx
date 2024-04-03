import { FormBox } from "@/components/FormBox";
import { Button, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { FormHeader } from "./components/FormHeader";
import { CreationForm } from "./components/CreationForm";
import { FundraiserForm } from "./components/FundraiserForm";

export const FundraisersCreate = () => {
  return (
    <Container>
      <Grid display="flex" flexDirection="column" paddingTop="25px" gap="35px">
        <FormHeader />

        <Grid display="flex" flexDirection="column" gap="15px">
          <FormBox
            title="Fundraiser Details"
            description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
          >
            <FundraiserForm />
          </FormBox>
          <FormBox
            title="Creation Details"
            description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
          >
            <CreationForm />
          </FormBox>

          <Grid display="flex" justifyContent="end">
            <Button variant="contained">Create Fundraise</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
