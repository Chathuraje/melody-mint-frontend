import axios from "axios";
import { SnackbarNotification } from "@/components/ui/SnackbarNotification";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const err = error.response;

    if (Array.isArray(err?.data.errors)) {
      for (const val of err.data.errors) {
        <SnackbarNotification message={val.description} variant="error" />;
      }
    } else if (typeof err?.data.errors === "object") {
      for (const e in err?.data.errors) {
        <SnackbarNotification
          message={err.data.errors[e][0]}
          variant="error"
        />;
      }
    } else if (err?.data) {
      <SnackbarNotification message={err.data} variant="error" />;
    } else if (err?.status === 401) {
      <SnackbarNotification
        message="Unauthorized: Please Sign using the wallet"
        variant="error"
      />;
      window.history.pushState({}, "Login Page", "/login");
    } else if (err) {
      {
        err?.data && (
          <SnackbarNotification message={err.data} variant="error" />
        );
      }
    }
  }
};
