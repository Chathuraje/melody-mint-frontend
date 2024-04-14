import { useAxiosPublic } from "../Axios/useAxiosPublic";

type LogoutAPIAPIType = () => void;

export const useLogoutAPI = () => {
  const { axiosPublic } = useAxiosPublic();

  const LogoutAPI: LogoutAPIAPIType = async () => {
    try {
      await axiosPublic.get("/auth/logout", {
        withCredentials: true,
      });
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { LogoutAPI };
};
