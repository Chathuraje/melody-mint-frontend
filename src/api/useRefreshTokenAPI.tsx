import { useAxiosPublic } from "../hooks/Axios/useAxiosPublic";
import { useAuth } from "../hooks/useAuth";

interface RefreshTokenResponse {
  id: string;
  access_token: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  first_name: string;
  last_name: string;
  moralis_id: string;
}

type GetRefreshTokenAPIType = () => Promise<RefreshTokenResponse>;

export const useRefreshTokenAPI = () => {
  const { setToken } = useAuth();
  const { axiosPublic } = useAxiosPublic();

  const GetRefreshTokenAPI: GetRefreshTokenAPIType = async () => {
    try {
      const response = await axiosPublic.get<RefreshTokenResponse>(
        "/auth/refresh_token",
        {
          withCredentials: true,
        }
      );
      setToken(response.data.access_token);
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetRefreshTokenAPI };
};
