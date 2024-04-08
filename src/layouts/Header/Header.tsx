import { Logo } from "@/components/Logo";
import { Unstable_Grid2 as Grid } from "@mui/material/";
import "./Header.css";
import { Navigation } from "@/components/Navigation";
import { PopupProvider } from "@/context/PopupProvider";
import { SignPopup } from "./components/SignPopup";
import { AuthStateView } from "./AuthStateView";

export const Header = () => {
  return (
    <Grid
      container
      display="flex"
      position="sticky"
      top={0}
      bgcolor="#fff"
      padding="16px 65px 16px 65px"
      borderBottom="1px solid rgba(0, 0, 0, 0.1)"
      justifyContent="space-between"
      alignItems="center"
      zIndex={1}
    >
      <Grid md={3}>
        <Logo width={65} />
      </Grid>

      <Grid md={6} display="flex" justifyContent="center">
        <Navigation type="main" />
      </Grid>

      <Grid md={3} display="flex" flexDirection="row" justifyContent="right">
        <PopupProvider>
          <AuthStateView />
          <SignPopup />
        </PopupProvider>
      </Grid>
    </Grid>
  );
};
