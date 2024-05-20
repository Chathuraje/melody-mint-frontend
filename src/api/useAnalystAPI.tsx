import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";

interface Records {
  date?: string;
  time?: string;
  duration?: string;
}

interface PlatformDetails {
  platform_name?: string;
  stream_count?: number;
  records?: Records[];
}

interface MusicResponse {
  id?: string;
  title?: string;
  user_id?: string;
  type?: string;
  total_stream?: number;
  total_platform?: number;
  total_time?: number;
  platform_details?: PlatformDetails[];
}

export type GetSingleAnalystDataAPI = (
  music_id: string
) => Promise<MusicResponse>;

type GetAllAnalystDataAPI = () => Promise<MusicResponse[]>;

export const useAnalystAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

  const GetAllAnalystDataAPI: GetAllAnalystDataAPI = async () => {
    try {
      const response = await axiosPrivate.get<MusicResponse[]>(
        `/music_identifier/`
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const trainAPI = async (file: File, songName: string) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("song_name", songName);

      const response = await axiosPrivate.post(
        "/music_identifier/train",
        formData,
        {
          headers: {
            accept: "application/json",
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

  const GetSingleAnalystDataAPI: GetSingleAnalystDataAPI = async (music_id) => {
    try {
      const response = await axiosPrivate.get<MusicResponse>(
        `/music_identifier/${music_id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return {
    GetAllAnalystDataAPI,
    trainAPI,
    GetSingleAnalystDataAPI,
  };
};
