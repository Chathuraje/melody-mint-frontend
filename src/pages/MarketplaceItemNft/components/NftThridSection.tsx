import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Grid, Typography } from "@mui/material";

export const NftThridSection = () => {
  return (
    <Grid>
      <Typography variant="h4" fontSize="25px">
        More from this collection
      </Typography>
      <Grid container padding="0px" margin="0px" spacing={2}>
        {[...Array(15)].map((_, index) => (
          <Grid key={index} xs={12} sm={6} md={3}>
            <MarketplaceCard name="Train the Trainer" floor={14.34} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
