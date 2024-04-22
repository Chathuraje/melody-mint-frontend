import { SocialMedia, UserModel } from "@/models/Users";
import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";

export type UserDataModel = {
  first_name: string | null;
  last_name: string | null;
  username: string | null;
  artist_description: string | null;
  social_media: SocialMedia | null;
  email: string | null;
  contact_no: string | null;
  website: string | null;
  disabled: boolean | null;
  profile_hero: FileList | null;
  profile_image: FileList | null;
};

type verificatonStatus = {
  verified: boolean;
};

type GetProfileAPIType = (abortSignal: AbortSignal) => Promise<UserModel>;
type UpdateProfileAPIType = (
  data: Partial<UserDataModel>
) => Promise<UserModel>;
type UpdateUserVerifyStatusAPI = (
  params: verificatonStatus
) => Promise<UserModel>;

export const useProfileAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

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

  const UpdateUserVerifyStatusAPI: UpdateUserVerifyStatusAPI = async (data) => {
    try {
      const formData = new FormData();
      formData.append("user_data", JSON.stringify(data));

      const response = await axiosPrivate.put<UserModel>(
        "/users/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const UpdateProfileAPI: UpdateProfileAPIType = async (data) => {
    try {
      const formData = new FormData();
      formData.append("user_data", JSON.stringify(data));

      if (data.profile_hero && data.profile_hero.length > 0) {
        formData.append("profile_hero", data.profile_hero[0]);
      }

      if (data.profile_image && data.profile_image.length > 0) {
        formData.append("profile_image", data.profile_image[0]);
      }

      const response = await axiosPrivate.put<UserModel>(
        "/users/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetProfileAPI, UpdateProfileAPI, UpdateUserVerifyStatusAPI };
};
