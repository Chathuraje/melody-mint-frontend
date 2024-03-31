import { Grid } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";

export const MarketplaceFilter = () => {
  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid>
          <SelectOptions label="Music Genre" items={["All", "Dance", "Rock"]} />
        </Grid>
      </Grid>
    </>
  );
};
