import { FormBox } from "@/components/FormBox";
import {
  Button,
  Container,
  Unstable_Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";
import { ImageCard } from "@/components/ui/ImageCard";
import { ProfileHero } from "@/components/ui/ProfileHero";

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
            <Grid display="flex" flexDirection="row" gap="25px" padding="0">
              <Grid
                display="flex"
                flexDirection="column"
                gap="20px"
                justifyContent="space-between"
                alignItems="center"
                width="25%"
              >
                <Grid
                  display="flex"
                  gap="10px"
                  flexDirection="column"
                  alignItems="left"
                  width="100%"
                  height="100%"
                >
                  <ImageCard border src="" upload height="100%" width="100%" />
                </Grid>
              </Grid>

              <Grid display="flex" flexDirection="column" gap="25px">
                <Grid
                  display="flex"
                  flexDirection="row"
                  gap="25px"
                  width="100%"
                >
                  <TextField
                    fullWidth
                    label="Fundraiser Name"
                    variant="outlined"
                    value="JohnDoe"
                  />
                  <TextField
                    fullWidth
                    label="Fundraiser Short Description"
                    variant="outlined"
                    value="JohnDoe"
                  />
                </Grid>

                <Grid
                  display="flex"
                  flexDirection="row"
                  gap="25px"
                  width="100%"
                >
                  <TextField
                    fullWidth
                    label="Goal (Eth)"
                    variant="outlined"
                    value="JohnDoe"
                  />
                  <TextField
                    fullWidth
                    label="Distribution percentage %"
                    variant="outlined"
                    value="JohnDoe"
                  />
                  <TextField
                    fullWidth
                    label="Deadline"
                    variant="outlined"
                    value="JohnDoe"
                  />
                  <TextField
                    fullWidth
                    label="Deadline"
                    variant="outlined"
                    value="JohnDoe"
                  />
                </Grid>

                <Grid>
                  <TextField
                    fullWidth
                    label="Description"
                    variant="outlined"
                    // Assuming description is passed as prop or fetched from somewhere
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit." // Example description
                    multiline
                    rows={5}
                  />
                </Grid>
              </Grid>
            </Grid>
          </FormBox>
          <FormBox
            title="Creation Details"
            description="Check for item trait changes and items flagged as stolen before a
  offer is accepted"
          >
            <Grid display="flex" flexDirection="column" gap="25px">
              <Grid display="flex" flexDirection="column" gap="25px">
                <Grid
                  display="flex"
                  flexDirection="row"
                  gap="25px"
                  width="100%"
                >
                  <TextField
                    fullWidth
                    label="Creation Name"
                    variant="outlined"
                    value="JohnDoe"
                  />
                </Grid>
                <Grid
                  display="flex"
                  flexDirection="row"
                  gap="25px"
                  width="100%"
                >
                  <TextField
                    fullWidth
                    label="Description for the project"
                    variant="outlined"
                    value="JohnDoe"
                    multiline
                    rows={5}
                  />
                </Grid>
              </Grid>

              <Grid
                display="flex"
                flexDirection="column"
                gap="25px"
                padding="0"
              >
                <Typography variant="h5">Upload Images</Typography>
                <Grid
                  display="flex"
                  flexDirection="row"
                  gap="25px"
                  width="100%"
                  height="300px"
                >
                  <ImageCard border src="" upload height="100%" width="25%" />
                  <ProfileHero border src="" upload height="100%" width="75%" />
                </Grid>
              </Grid>
            </Grid>
          </FormBox>

          <Grid display="flex" justifyContent="end">
            <Button variant="contained">Create Fundraise</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
