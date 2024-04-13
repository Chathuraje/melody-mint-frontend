import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <Grid minHeight="100vh">
      <Outlet />
    </Grid>
  );
};
