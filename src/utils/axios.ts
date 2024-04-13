import axios, { AxiosError } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const handleAxiosResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response) {
    const { status } = error.response;
    switch (status) {
      case 401:
        // Unauthorized: Redirect user to login page or perform any necessary action
        console.log("Unauthorized access. Redirecting to login page...");
        break;
      case 404:
        // Not Found: Handle resource not found error
        console.log("Resource not found:", error.response.data);
        break;
      default:
        // Other error status codes: Log status code and response data
        console.log("Server responded with status code:", status);
        console.log("Response data:", error.response.data);
        break;
    }
    console.log("Server responded with status code:", error.response.status);
    console.log("Response data:", error.response.data);
    console.log("Headers:", error.response.headers);
  } else if (error.request) {
    console.log("No response received from server. Request:", error.request);
  } else {
    console.log("Error during request setup:", error.message);
  }
  return Promise.reject(error);
};

export const axiosPublic = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

axiosPublic.interceptors.response.use(
  (response) => response,
  (error) => handleAxiosResponseError(error)
);

export const axiosPrivate = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${JSON.parse(
      localStorage.getItem("auth_token") || "{}"
    )}`,
  },
  withCredentials: true,
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  (error) => handleAxiosResponseError(error)
);
