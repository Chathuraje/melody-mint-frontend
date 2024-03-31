import { SingleCollectionSection } from "@/pages/MarketplaceItem/components/SingleCollectionSection";
import { Grid, Typography } from "@mui/material";

export const NftThridSection = () => {
  return (
    <Grid>
      <Typography variant="h4" fontSize="25px">
        More from this collection
      </Typography>
      <SingleCollectionSection amount={4} />
    </Grid>
  );
};
