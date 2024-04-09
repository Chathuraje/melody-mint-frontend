import { ConnectKitButton } from "connectkit";
import { ConnectedView } from "./components/ConnectedView";
import { ConnectButton } from "@/components/ui/ConnectButton";
import { useAccount } from "wagmi";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useNotification } from "@/hooks/useNotifications";

export const AuthStateView = () => {
  const { isAuthenticated, logout, setSignPopupState } = useAuth();

  const { status, address, chainId, isDisconnected, isConnected } =
    useAccount();

  const { sendNotification } = useNotification();

  useEffect(() => {
    if (isConnected && !isAuthenticated()) {
      setSignPopupState(true);
      sendNotification("info", "Please sign in to connect to the app.");
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
