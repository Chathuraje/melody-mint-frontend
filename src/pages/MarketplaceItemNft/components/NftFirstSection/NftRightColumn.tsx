import { Grid } from "@mui/material";
import { DetailsGrid } from "./NftRightColumn/DetailsGrid";
import { ButtonGrid } from "./NftRightColumn/ButtonGrid";
import { PricingGrid } from "./NftRightColumn/PricingGrid";
import { OfferMadeTable } from "./NftRightColumn/OfferMadeTable";

export const NftRightColumn = () => {
  return (
    <Grid
      xs={8}
      display="flex"
      flexDirection="column"
      gap="25px"
      padding="0px 20px 5px 20px"
    >
      <DetailsGrid />
      <PricingGrid />
      <ButtonGrid />
      <OfferMadeTable />
    </Grid>
  );
};
