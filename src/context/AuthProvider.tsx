import { useLoginAPI } from "@/hooks/useLoginAPI";
import { UserProfile } from "@/models/user";
import { handleError } from "@/utils/ErrorHandler";
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

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("auth_token");

    if (storedUser && storedToken) {
      setUser(JSON.parse(storedToken));
      setToken(JSON.parse(storedToken));
    }
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const authenticate = async (address: `0x${string}`, chainId: number) => {
    try {
      const response = await loginAPI({ address, chainId });

      if (response) {
        localStorage.setItem("auth_token", JSON.stringify(response.data.token));

        const userObj = {
          id: response.data.id,
          address: response.data.wallet_address,
          chainId: response.data.chain_id,
        };

        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(response.data.token);
        setUser(userObj);
      }
    } catch (error) {
      disconnect();
      handleError(error);
    }
  };

  const isAuthenticated = () => {
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
