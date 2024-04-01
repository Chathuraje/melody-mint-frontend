import { Card } from "@/components/ui/Card";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import CollectionPlaceholder from "@/assets/marketplace/single-collection-image-palceholder.png";
import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";

export const MarketplaceCard = () => {
  const FundRaiserItem = {
    backgroundImage: `url(${CollectionPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Card>
      <Grid display="flex" style={FundRaiserItem} height="275px"></Grid>

      <Grid
        gap="16px"
        padding="15px 15px 15px 15px"
        display="flex"
        flexDirection="column"
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
