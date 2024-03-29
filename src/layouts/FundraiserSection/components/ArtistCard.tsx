import { Box, Typography } from "@mui/material";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";

export const ArtistCard = () => {
  return (
    <Box display="flex" alignItems="center" gap="12px" alignSelf="stretch">
      <img src={ArtistPlaceholder} alt="Artist Image" />
      <Typography variant="subtitle2" color="#6D6D6D">
        Artist name
      </Typography>
    </Box>
  );
};
