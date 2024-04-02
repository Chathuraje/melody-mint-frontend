import { ImageCard } from "@/components/ui/ImageCard";
import { ProfileHero } from "@/components/ui/ProfileHero";
import { Unstable_Grid2 as Grid, TextField, Typography } from "@mui/material";

export const CreationForm = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="25px">
      <Grid display="flex" flexDirection="column" gap="25px">
        <Grid display="flex" flexDirection="row" gap="25px" width="100%">
          <TextField
            fullWidth
            label="Creation Name"
            variant="outlined"
            value="JohnDoe"
          />
        </Grid>
        <Grid display="flex" flexDirection="row" gap="25px" width="100%">
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

      <Grid display="flex" flexDirection="column" gap="25px" padding="0">
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
  );
};
