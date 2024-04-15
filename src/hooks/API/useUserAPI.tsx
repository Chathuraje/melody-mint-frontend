import { UserModel } from "@/models/Users";
import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";

type GetUserAPIType = (
  user_id: string,
  abortSignal: AbortSignal
) => Promise<UserModel>;

export const useGetUserAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

  const GetUserAPI: GetUserAPIType = async (user_id, abortSignal) => {
    try {
      const response = await axiosPrivate.get<UserModel>(`/users/${user_id}`, {
        signal: abortSignal,
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetUserAPI };
};
