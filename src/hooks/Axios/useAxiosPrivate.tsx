import { useRefreshTokenAPI } from "../../api/useRefreshTokenAPI";
import { useAuth } from "../useAuth";
import { useNotification } from "../useNotifications";
import { useEffect } from "react";
import axios from "axios";
import { useHandleAxiosErrors } from "./useHandleAxiosErrors";

const API_URL = import.meta.env.VITE_API_URL;

export const useAxiosPrivate = () => {
  const { GetRefreshTokenAPI } = useRefreshTokenAPI();
  const { token, setToken, user, logout } = useAuth();
  const { sendNotification } = useNotification();
  const { handleAxiosError } = useHandleAxiosErrors();

  const axiosPrivate = axios.create({
    baseURL: API_URL,
    headers: {
      "Content-type": "application/json",
    },
    withCredentials: true,
  });

  axiosPrivate.interceptors.response.use(
    (response) => response,
    (error) => handleAxiosError(error)
  );

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (user) {
          if (!config.headers["Authorization"]) {
            config.headers["Authorization"] = `Bearer ${token}`;
          }
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          try {
            const newAccessToken = await GetRefreshTokenAPI();
            setToken(newAccessToken.access_token);
            localStorage.setItem(
              "mmweb3_auth_token",
              JSON.stringify(newAccessToken.access_token)
            );
            error.config.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken.access_token}`;

            return axiosPrivate(error.config);
          } catch (error) {
            sendNotification("error", "Session expired. Please login again.");
            logout();
            return Promise.reject(error);
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseIntercept);
      axiosPrivate.interceptors.request.eject(requestIntercept);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GetRefreshTokenAPI, user]);

  return { axiosPrivate };
};
