import { useLoginAPI } from "@/hooks/API/useLoginAPI";
import { useNotification } from "@/hooks/useNotifications";
import { TokenResponse } from "@/models/Users";
import { createContext, useEffect, useState } from "react";
import { useAccount, useDisconnect } from "wagmi";

interface AuthContextType {
  user: TokenResponse | null;
  token: string | null;
  authenticate: (address: `0x${string}`, chainId: number) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
  signPopupState: boolean;
  setSignPopupState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = (props: AuthProviderProps) => {
  const [signPopupState, setSignPopupState] = useState(false);

  const { children } = props;

  const { loginAPI } = useLoginAPI();

  const { disconnect } = useDisconnect();

  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<TokenResponse | null>(null);
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

      if (response) {
        localStorage.setItem("auth_token", JSON.stringify(response.token));

        const userObj = {
          id: response.id,
          address: response.wallet_address,
          chainId: response.chain_id,
          first_name: response.first_name,
          last_name: response.last_name,
        };

        localStorage.setItem("user", JSON.stringify(userObj));
        setToken(response.token);
        setUser(userObj);
        setSignPopupState(false);
        sendNotification("success", "Successfully logged in");
      }
    } catch (error) {
      console.error("Error getting challenge message: ", error);
      disconnect();
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
    signPopupState: signPopupState,
    setSignPopupState: setSignPopupState,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};
