import { Card, Grid, Typography } from "@mui/material";
import SingleCollectionPlaceholder from "@/assets/marketplace/single-collection-image-palceholder.png";

export const SingleCollectionCard = () => {
  const SingleCollectionItem = {
    backgroundImage: `url(${SingleCollectionPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Card>
      <Grid
        display="flex"
        style={SingleCollectionItem}
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
