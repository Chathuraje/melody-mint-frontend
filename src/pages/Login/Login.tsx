import { useAuth } from "@/hooks/useAuth";
import { Grid } from "@mui/material";
import { useModal } from "connectkit";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

export const Login = () => {
  const { open: connectPopup, setOpen: setConnectPopup } = useModal();
  const { isAuthenticated, signPopupState, user } = useAuth();
  const navigate = useNavigate();
  const [initialConnectPopupOpen, setInitialConnectPopupOpen] = useState(false);

  const { address, chain } = useAccount();

  useEffect(() => {
    if (isAuthenticated()) {
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

  return <Grid>Login</Grid>;
};
