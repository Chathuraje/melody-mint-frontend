import { FormBox } from "@/components/FormBox";
import {
  Button,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import { FundraiserForm } from "./FundraiserForm";
import { CreationForm } from "./CreationForm";

interface CUPageTamplageProps {
  title: string;
  description: string;
}

export const CUPageTamplage = (props: CUPageTamplageProps) => {
  const { title, description } = props;

  return (
    <Container>
      <Grid display="flex" flexDirection="column" paddingTop="25px" gap="35px">
        <Grid display="flex" flexDirection="column" gap="15px">
          <Typography variant="h3">{title}</Typography>
          <Typography variant="subtitle2" color="black">
            {description}
          </Typography>
        </Grid>

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
