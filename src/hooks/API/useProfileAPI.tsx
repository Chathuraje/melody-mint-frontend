import { UserModel } from "@/models/Users";
import { axiosPrivate } from "@/utils/axios";

type GetProfileAPIType = (abortSignal: AbortSignal) => Promise<UserModel>;

export const useProfileAPI = () => {
  const GetProfileAPI: GetProfileAPIType = async (abortSignal) => {
    try {
      const response = await axiosPrivate.get<UserModel>("/users/profile", {
        signal: abortSignal,
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetProfileAPI };
};
