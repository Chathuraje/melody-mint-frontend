import { UserModel } from "@/models/Users";
import { axiosPrivate } from "@/utils/axios";

export const useProfileAPI = () => {
  const GetProfileAPI = async () => {
    try {
      const response = await axiosPrivate.get<UserModel>("/users/profile");

      if (response.status === 200 && response.data !== undefined) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { GetProfileAPI };
};
