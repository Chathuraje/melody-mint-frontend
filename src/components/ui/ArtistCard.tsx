import { Box, Typography } from "@mui/material";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";

interface ArtistCardPrps {
  short?: boolean;
  artistName: string;
  artistPlaceholder?: string;
}

export const ArtistCard = (props: ArtistCardPrps) => {
  const placeholder = props.artistPlaceholder || ArtistPlaceholder;

  return (
    <Box display="flex" alignItems="center" gap="12px" alignSelf="stretch">
      {props.short ? null : <img src={placeholder} alt="Artist Image" />}
      <Typography variant="subtitle2" color="#6D6D6D">
        {props.artistName}
      </Typography>
    </Box>
  );
};
