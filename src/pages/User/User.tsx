import { Unstable_Grid2 as Grid } from "@mui/material/";
import { View } from "./Pages/View/View";
import { Update } from "./Pages/Update/Update";
import { ProfileProvider } from "./context/ProfileProvider";

export const UserView = () => {
  return (
    <Grid>
      <View />
    </Grid>
  );
};

export const UserUpdate = () => {
  return (
    <Grid>
      <ProfileProvider>
        <Update />
      </ProfileProvider>
    </Grid>
  );
};
