import { Unstable_Grid2 as Grid } from "@mui/material";
import { MarketplaceStaticsBox } from "./MarketplaceStaticsBox";

export const MarketplaceStatics = () => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="left"
      justifyContent="end"
    >
      <Grid
        display="flex"
        flexDirection="row"
        alignItems="left"
        justifyContent="end"
        gap="20px"
      >
        <MarketplaceStaticsBox title="Total volume" value="80 ETH" />
        <MarketplaceStaticsBox title="Floor price" value="0.027 ETH" />
        <MarketplaceStaticsBox title="Best offer" value="0.0011 ETH" />
        <MarketplaceStaticsBox title="Listed" value="0.2%" />
        <MarketplaceStaticsBox title="Owners (Unique)" value="4,284 (86%)" />
      </Grid>
    </Grid>
  );
};
