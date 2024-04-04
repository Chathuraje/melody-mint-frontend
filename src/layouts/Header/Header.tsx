import { Logo } from "@/components/Logo";
import { Button, Unstable_Grid2 as Grid, Typography } from "@mui/material/";
import "./Header.css";
import { Navigation } from "@/components/Navigation";
import WalletIcon from "@mui/icons-material/Wallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


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

      <Grid
        md={3}
        display="flex"
        flexDirection="row"
        justifyContent="right"
        gap="15px"
      >
        <Button variant="contained" color="primary">
          Connect Wallet
        </Button>

        <Grid
          display="flex"
          flexDirection="row"
          justifyContent="right"
          gap="15px"
          bgcolor="#f5f5f5"
          padding="5px"
        >
          <WalletIcon />
          <Typography fontFamily="22px" fontWeight="400">
            234 ETH
          </Typography>
        </Grid>

        <Grid
          display="flex"
          justifyContent="right"
          bgcolor="#f5f5f5"
          padding="5px"
          gap="15px"
        >
          <AccountCircleIcon />
          <KeyboardArrowDownIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};
