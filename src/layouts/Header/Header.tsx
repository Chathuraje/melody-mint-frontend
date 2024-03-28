import { Grid, Unstable_Grid2 } from "@mui/material";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui";
import { Navigation } from "./components/";

export const Header = () => {
  return (
    <Unstable_Grid2
      padding="16px 65px 16px 65px"
      flexShrink={0}
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex={999}
    >
      <Grid
        md={3}
        display="flex"
        justifyContent="left"
        alignItems="left"
        zIndex={999}
      >
        <Logo />
      </Grid>

      <Grid
        md={6}
        display={{ md: "flex", xs: "none", sm: "none" }}
        justifyContent="center"
        alignItems="center"
      >
        <Navigation />
      </Grid>

      <Grid md={3} display="flex" justifyContent="left" alignItems="right">
        <Button text="CONNECT WALLET" typeofButtons="main" />
      </Grid>
    </Unstable_Grid2>
  );
};
