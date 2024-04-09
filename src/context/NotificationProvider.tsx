import { createContext } from "react";
import { Toaster, toast } from "sonner";

export interface NotificationContextType {
  sendNotification: (
    value: "success" | "error" | "info" | "warning" | "default",
    message: string
  ) => void;
}

export const NotificationContext = createContext<
  NotificationContextType | undefined
>(undefined);

interface NotificationProviderPrams {
  children: React.ReactNode;
}

export const NotificationProvider = (params: NotificationProviderPrams) => {
  const { children } = params;

  const sendNotification = (
    value: "success" | "error" | "info" | "warning" | "default",
    message: string
  ) => {
    switch (value) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      case "default":
        toast(message);
        break;
      default:
        break;
    }
  };

  const contextValue: NotificationContextType = {
    sendNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      <Toaster richColors closeButton />
      {children}
    </NotificationContext.Provider>
  );
};
