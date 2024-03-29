import { NavigationLinks } from "./NavigationLinks";
import "./Navigation.css";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const Navigation = () => {
  return (
    <Grid display="flex" gap="24px">
      <NavigationLinks />
    </Grid>
  );
};
