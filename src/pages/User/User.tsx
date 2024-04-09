import { Unstable_Grid2 as Grid } from "@mui/material/";
import { UserProvider } from "./context/UserProvider";
import { View } from "./Pages/View/View";
import { Update } from "./Pages/Update/Update";

export const UserView = () => {
  return (
    <Grid>
      <UserProvider>
        <View />
      </UserProvider>
    </Grid>
  );
};

export const UserUpdate = () => {
  return (
    <Grid>
      <UserProvider>
        <Update />
      </UserProvider>
    </Grid>
  );
};
