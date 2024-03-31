import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import CollectionImagePlaceholder from "@/assets/marketplace/single-collection-image-palceholder.png";

export const MarketplaceCollectionInfo = () => {
  const CollectionImage = {
    backgroundImage: `url(${CollectionImagePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid display="flex" flexDirection="column">
      <Grid
        display="flex"
        style={CollectionImage}
        width="160px"
        height="160px"
        padding="10px"
        flexDirection="column"
        alignItems="flex-end"
      ></Grid>
      <Typography variant="h4" color="white" fontSize="28px" font-weight="600">
        Music track name
      </Typography>
      <Typography variant="subtitle2" color="white" fontSize="18px">
        Artist name
      </Typography>
    </Grid>
  );
};
