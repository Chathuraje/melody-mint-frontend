import { PopupContext } from "@/context/PopupProvider";
import { ConnectKitButton } from "connectkit";
import { ConnectedView } from "./components/ConnectedView";
import { ConnectButton } from "@/components/ui/ConnectButton";
import { useAccount } from "wagmi";
import { useAuth } from "@/hooks/useAuth";
import { useContext, useEffect } from "react";

export const AuthStateView = () => {
  const { setPopupState } = useContext(PopupContext)!;
  const { isAuthenticated, logout } = useAuth();

  const { status, address, chainId, isDisconnected, isConnected } =
    useAccount();

  useEffect(() => {
    if (isConnected && !isAuthenticated()) {
      setPopupState(true);
      console.log("Connected and not authenticated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, isConnected, chainId, status]);

  useEffect(() => {
    if (isDisconnected) {
      logout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisconnected]);

  return (
    <ConnectKitButton.Custom>
      {({ isConnecting, show, isConnected }) => {
        return isConnected && isAuthenticated() ? (
          <ConnectedView />
        ) : (
          <ConnectButton onClick={show} isConnecting={isConnecting} />
        );
      }}
    </ConnectKitButton.Custom>
  );
};
