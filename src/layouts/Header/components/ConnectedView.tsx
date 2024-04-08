import { Unstable_Grid2 as Grid } from "@mui/material";
import { UserPopup } from "./Menu/UserPopup";
import { WalletDetails } from "./WalletDetails";
import { ProfileButton } from "./ProfileButton";
import { SwitcherPopup } from "./Menu/SwitcherPopup";
import { usePopup } from "../hooks/usePopup";
import { Popup } from "./Menu/Popup";

export const ConnectedView = () => {
  const [profilePopup, profileActions] = usePopup();
  const [chainListPopup, chainListActions] = usePopup();
  return (
    <>
      <Grid
        display="flex"
        flexDirection="row"
        gap="25px"
        justifyContent="center"
        alignItems="center"
      >
        <WalletDetails
          handleClick={chainListActions.handleClick}
          open={chainListPopup.open}
        />

        <Popup
          children={<SwitcherPopup />}
          open={chainListPopup.open}
          anchorEl={chainListPopup.anchorEl}
          onClose={chainListActions.handleClose}
        />

        <ProfileButton
          handleClick={profileActions.handleClick}
          open={profilePopup.open}
        />

        <Popup
          children={<UserPopup />}
          open={profilePopup.open}
          anchorEl={profilePopup.anchorEl}
          onClose={profileActions.handleClose}
        />
      </Grid>
    </>
  );
};
