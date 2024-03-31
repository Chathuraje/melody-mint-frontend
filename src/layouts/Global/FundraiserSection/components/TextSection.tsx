import {
  Box,
  LinearProgress,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";
import { ArtistCard } from "@/components/ui/ArtistCard";

export const TextSection = () => {
  return (
    <>
      <Grid
        gap="16px"
        padding="8px 8px 24px 8px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <Typography variant="h5">Music Title</Typography>
        <Typography variant="subtitle2" color="#6D6D6D">
          Fundraiser sub title
        </Typography>

        <ArtistCard
          artistName="Artist Name"
          artistPlaceholder={ArtistPlaceholder}
        />

        <Box width="100%">
          <LinearProgress color="primary" variant="determinate" value={55} />
        </Box>

        <Box>
          <Typography variant="subtitle2" color="#6D6D6D">
            <b>Eth 0.2 raised of Eth 0.5</b>
          </Typography>
        </Box>
      </Grid>
    </>
  );
};
