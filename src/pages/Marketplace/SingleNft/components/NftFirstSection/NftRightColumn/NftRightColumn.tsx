import { Grid } from "@mui/material";
import { DetailsGrid } from "./DetailsGrid";
import { ButtonGrid } from "./ButtonGrid";
import { PricingGrid } from "./PricingGrid";
import { OfferMadeTable } from "./OfferMadeTable";

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
