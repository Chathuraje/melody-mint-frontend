// import { SelectOptions } from "@/components/ui/SelectOptions";
import { Button, Unstable_Grid2 as Grid } from "@mui/material";
import { useContext } from "react";
import { AnalystContext } from "../context/AnalystContext";

export const AnalystFilter = () => {
  const { setPopupState } = useContext(AnalystContext)!;

  const handleOpenPopup = () => {
    setPopupState(true);
  };

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
          {/* <SelectOptions
            label="Music Genres"
            items={["All", "Dance", "Rock"]}
          /> */}
        </Grid>
        <Grid alignContent="center">
          <Button onClick={handleOpenPopup} variant="outlined" color="primary">
            Add music to the tracker
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
