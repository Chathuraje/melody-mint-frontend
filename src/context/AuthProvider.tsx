import { useLoginAPI } from "@/hooks/useLoginAPI";
import { useNotification } from "@/hooks/useNotifications";
import { UserProfile } from "@/models/user";
import { handleError } from "@/utils/Errors/ErrorHandler";
import { createContext, useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  authenticate: (address: `0x${string}`, chainId: number) => void;
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

  const { loginAPI } = useLoginAPI();

  const { disconnect } = useDisconnect();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState<boolean>(false);

  const { address, chainId } = useAccount();

  const { sendNotification } = useNotification();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("auth_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setToken(JSON.parse(storedToken));
    }
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = async (address: `0x${string}`, chainId: number) => {
    try {
      const response = await loginAPI({ address, chainId });
      console.log(response);
      if (response) {
        localStorage.setItem("auth_token", JSON.stringify(response.data.token));

        const userObj = {
          id: response.data.id,
          address: response.data.wallet_address,
          chainId: response.data.chain_id,
          first_name: response.data.first_name,
          last_name: response.data.last_name,
        };

        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(response.data.token);
        setUser(userObj);

        sendNotification("success", "Successfully logged in");
      }
    } catch (error) {
      disconnect();
      handleError(error);
    }
  };

  const isAuthenticated = () => {
    console.log(user);
    console.log(user?.address === address);
    console.log(user?.chainId === chainId);

    return (
      user !== null &&
      user !== undefined &&
      user.address !== undefined &&
      user.chainId !== undefined &&
      user.address === address &&
      user.chainId === chainId
    );
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("auth_token");
    setUser(null);
    setToken("");
    disconnect();
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
