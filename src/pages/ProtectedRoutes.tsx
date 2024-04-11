import { useAuth } from "@/hooks/useAuth";
import { useNotification } from "@/hooks/useNotifications";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount, useDisconnect } from "wagmi";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = (props: ProtectedRoutesProps) => {
  const { children } = props;

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { sendNotification } = useNotification();

  const { isConnected, isDisconnected, addresses } = useAccount();
  const { isSuccess } = useDisconnect();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated()) {
      sendNotification("error", "You need to be logged in to access this page");
      if (addresses !== undefined) {
        navigate("/");
      } else {
        navigate("/login");
      }
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDisconnected, isConnected, isSuccess]);

  // Render loading state while authentication is being checked
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render children if authenticated, otherwise redirecting to login
  return isAuthenticated() ? <>{children}</> : null;
};
