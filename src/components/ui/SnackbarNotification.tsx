import { useSnackbar } from "notistack";
import { useEffect } from "react";

interface SnackbarNotificationProps {
  message: string | null;
  variant: "error" | "success" | "warning" | "info";
}

export const SnackbarNotification = (props: SnackbarNotificationProps) => {
  const { message, variant } = props;

  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (message) {
      enqueueSnackbar(message, { variant: variant });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return null;
};
