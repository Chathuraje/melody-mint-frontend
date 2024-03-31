import { Card } from "@/components/ui/Card";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import FundraisePlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";
import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";

export const MarketplaceCard = () => {
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
        borderRadius="8px"
        padding="10px"
        flexDirection="column"
        alignItems="flex-end"
      ></Grid>

      <Grid
        gap="16px"
        padding="8px 8px 24px 8px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <Typography variant="h5">Music Title</Typography>

        <ArtistCard
          artistName="Artist Name"
          artistPlaceholder={ArtistPlaceholder}
        />

        <Grid>
          <Typography variant="subtitle2" color="#6D6D6D">
            <b>Floor:</b> 0.001 eth
          </Typography>
          <Typography variant="subtitle2" color="#6D6D6D">
            <b>Total Volume:</b> 0.001 eth
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};
