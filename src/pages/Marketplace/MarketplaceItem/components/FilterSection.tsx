import { Search } from "@/components/ui/Search";
import { SelectOptions } from "@/components/ui/SelectOptions";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const FilterSection = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      gap="25px"
    >
      <Search size="small" />
      <SelectOptions label="Sort" items={["All", "New", "Trending"]} />
    </Grid>
  );
};
