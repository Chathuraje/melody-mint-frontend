import { useAuth } from "@/hooks/useAuth";
import { Unstable_Grid2 as Grid } from "@mui/material";
import { useModal } from "connectkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const Login = () => {
  const { open: connectPopup, setOpen: setConnectPopup } = useModal();
  const { isAuthenticated, signPopupState, user } = useAuth();
  const navigate = useNavigate();
  const [initialConnectPopupOpen, setInitialConnectPopupOpen] = useState(false);

  // TODO: Try to fix bug that caouse the page to not to redirected to last page when the user is connected, only when directly comes to protectd routes
  const { address, chain } = useAccount();

  useEffect(() => {
    if (isAuthenticated()) {
      console.log(`Checking user authentication... ${isAuthenticated()}`);
      navigate(-1);
    } else if (!initialConnectPopupOpen && !signPopupState) {
      setInitialConnectPopupOpen(true);
      setConnectPopup(true);
    } else if (!connectPopup && initialConnectPopupOpen && !signPopupState) {
      setInitialConnectPopupOpen(false);
      navigate("/");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, connectPopup, address, chain]);

  return (
    <Grid
      container
      display="flex"
      height="100vh"
      bgcolor="black"
      overflow="hidden"
    >
      Login
    </Grid>
  );
};
