import { Card } from "@/components/ui/Card";
import {
  Box,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import FundraisePlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";
import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";

const FundRaiserCard = () => {
  const FundRaiserItem = {
    backgroundImage: `url(${FundraisePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Card>
      <Grid
        display="flex"
        style={FundRaiserItem}
        height="275px"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Box
          padding="8px 12px 8px 12px"
          bgcolor="secondary.light"
          borderRadius="16px"
        >
          2% distribution
        </Box>
      </Grid>
      <Grid
        gap="16px"
        display="flex"
        flexDirection="column"
        padding="15px 15px 15px 15px"
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

        <Typography variant="subtitle2" color="#6D6D6D">
          <b>Eth 0.2 raised of Eth 0.5</b>
        </Typography>
      </Grid>
    </Card>
  );
};

export default FundRaiserCard;
