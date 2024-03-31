import { Box, Typography } from "@mui/material";

interface ArtistCardPrps {
  artistName: string;
  artistPlaceholder: string;
}

export const ArtistCard = (props: ArtistCardPrps) => {
  return (
    <Box display="flex" alignItems="center" gap="12px" alignSelf="stretch">
      <img src={props.artistPlaceholder} alt="Artist Image" />
      <Typography variant="subtitle2" color="#6D6D6D">
        {props.artistName}
      </Typography>
    </Box>
  );
};
