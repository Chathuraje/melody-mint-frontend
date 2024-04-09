import { NotificationContext } from "@/context/NotificationProvider";
import { useContext } from "react";

export const useNotification = () => {
  const notification = useContext(NotificationContext);
  if (!notification) {
    throw new Error(
      "useNotification must be used within an NotificationProvider"
    );
  }
  return notification;
};
