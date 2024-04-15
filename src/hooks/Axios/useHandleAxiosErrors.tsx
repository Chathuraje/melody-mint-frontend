import { AxiosError } from "axios";
import { useNotification } from "../useNotifications";

export const useHandleAxiosErrors = () => {
  const { sendNotification } = useNotification();

  const handleAxiosError = (error: AxiosError): Promise<AxiosError> => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 400:
          // Bad Request: Handle bad request error
          sendNotification("error", "Bad request");
          break;
        case 401:
          // Unauthorized: Handle unauthorized error
          break;
        case 403:
          // Forbidden: Handle forbidden error
          sendNotification("error", "Forbidden");
          break;
        case 404:
          // Not Found: Handle resource not found error
          sendNotification("error", "Resource not found");
          break;
        default:
          // Other error status codes: Log status code and response data
          sendNotification(
            "error",
            `Server responded with status code: ${status}`
          );
          console.log("Response data:", error.response.data);
          break;
      }
    } else if (error.request) {
      console.log("Error during request setup:", error.request);
    } else {
      console.log("Error during request setup aaa:", error.message);
    }
    return Promise.reject(error);
  };

  return { handleAxiosError };
};
