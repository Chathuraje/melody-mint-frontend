import { User } from "@/models/user";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

interface handleGetUserAPI {
  id: string;
}

export const useUserAPI = () => {
  const GetUserAPI = async (params: handleGetUserAPI) => {
    const { id } = params;

    try {
      const response = await axios.get<User>(`${API_URL}/users/${id}`, {
        headers: {
          accept: "application/json",
        },
      });

      if (response.status === 200 && response.data !== undefined) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { GetUserAPI };
};
