import axios from "axios";
import { useHandleAxiosErrors } from "./useHandleAxiosErrors";

const API_URL = import.meta.env.VITE_API_URL;

export const useAxiosPublic = () => {
  const { handleAxiosError } = useHandleAxiosErrors();

  const axiosPublic = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
    },
  });

  axiosPublic.interceptors.response.use(
    (response) => response,
    (error) => handleAxiosError(error)
  );

  return { axiosPublic };
};
