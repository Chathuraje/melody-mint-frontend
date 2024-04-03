import { ImageCard } from "@/components/ui/ImageCard";
import { Unstable_Grid2 as Grid, TextField } from "@mui/material";

export const FundraiserForm = () => {
  return (
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
        <Grid display="flex" flexDirection="row" gap="25px" width="100%">
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

        <Grid display="flex" flexDirection="row" gap="25px" width="100%">
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
  );
};
