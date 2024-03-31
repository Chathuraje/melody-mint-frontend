import { Grid } from "@mui/material";
import { ToggleButtons } from "@/components/ui/ToggleButtons";
import { SelectOptions } from "@/components/ui/SelectOptions";

export const FundraisersFilter = () => {
  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Grid>
          <ToggleButtons values={["Top", "Trending"]} />
        </Grid>
        <Grid>
          <SelectOptions />
        </Grid>
      </Grid>
    </>
  );
};
