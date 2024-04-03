import { Grid } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";
import categories from "@/data/categories.json";
import { ToggleSwitch } from "@/components/ToggleSwitch";

export const MarketplaceFilter = () => {
  const categoryNames = categories.map((category) => category.name);

  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
      >
        <ToggleSwitch values={["Trending", "Top"]} />

        <SelectOptions label="Categories" items={["All", ...categoryNames]} />
      </Grid>
    </>
  );
};
