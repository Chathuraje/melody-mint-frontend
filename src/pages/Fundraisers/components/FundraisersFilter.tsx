import { Button, Grid } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";

export const FundraisersFilter = () => {
  return (
    <>
      <Grid
        display="flex"
        gap="35px"
        flexDirection="row"
        justifyContent="space-between"
        alignContent="center"
      >
        {/* <Grid>
          <ToggleButtons values={["Top", "Trending"]} />
        </Grid> */}
        <Grid>
          <SelectOptions
            label="Music Genres"
            items={["All", "Dance", "Rock"]}
          />
        </Grid>
        <Grid alignContent="center">
          <Button variant="outlined" color="primary">
            Add New Fundraiser
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
