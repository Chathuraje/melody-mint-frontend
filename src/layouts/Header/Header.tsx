import { Logo } from "@/components/Logo";
import { Button, Unstable_Grid2 as Grid } from "@mui/material/";
import "./Header.css";
import { Navigation } from "@/components/Navigation";

export const Header = () => {
  return (
    <Grid
      container
      display="flex"
      width="100%"
      height="100%"
      md={12}
      position="sticky"
      top={0}
      bgcolor="#fff"
      padding="16px 65px 16px 65px"
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      zIndex={999}
    >
      <Grid md={3} display="flex" justifyContent="left">
        <Logo width={65} />
      </Grid>

      <Grid md={6} display="flex" justifyContent="center">
        <Navigation type="main" />
      </Grid>

      <Grid md={3} display="flex" justifyContent="right">
        <Button variant="contained" color="primary">
          Connect Wallet
        </Button>
      </Grid>
    </Grid>
  );
};
