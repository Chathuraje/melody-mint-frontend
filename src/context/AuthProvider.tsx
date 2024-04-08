import { SnackbarNotification } from "@/components/ui/SnackbarNotification";
import { UserProfile } from "@/models/user";
import { LoginAPI } from "@/services/AuthService";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  authenticate: (address: `0x${string}` | undefined, chainId: number) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props;

  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("auth_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedToken));
      setToken(JSON.parse(storedToken));
    }
    setIsReady(true);
  }, []);

  const authenticate = async (
    address: `0x${string}` | undefined,
    chainId: number
  ) => {
    await LoginAPI({ address, chainId })
      .then((response) => {
        if (response) {
          localStorage.setItem(
            "auth_token",
            JSON.stringify(response?.data.token)
          );

          const userObj = {
            id: response?.data.id,
            address: response?.data.address,
            chainId: response?.data.chainId,
          };

          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(response?.data.token);
          setUser(userObj!);

          <SnackbarNotification message="Login successful" variant="success" />;
          navigate("/");
        }
      })
      .catch(() => {
        <SnackbarNotification
          message="Server error occured!"
          variant="error"
        />;
      });
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth_token");
    setUser(null);
    setToken("");
    navigate("/");
  };

  const contextData: AuthContextType = {
    user: user,
    token: token,
    authenticate: authenticate,
    logout: logout,
    isAuthenticated: isAuthenticated,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};
