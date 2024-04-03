import { Grid } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import categories from "@/data/categories.json";

export const FundraisersFilter = () => {
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
