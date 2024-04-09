import { useAuth } from "@/hooks/useAuth";
import { useNotification } from "@/hooks/useNotifications";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = (props: ProtectedRoutesProps) => {
  const { children } = props;

  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const { sendNotification } = useNotification();

  useEffect(() => {
    if (!isAuthenticated()) {
      sendNotification("error", "You need to be logged in to access this page");
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, isAuthenticated]);

  return <>{children}</>;
};
