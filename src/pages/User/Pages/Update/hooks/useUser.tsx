import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

export const useUser = () => {
  const user = useContext(UserContext);
  if (!user) {
    throw new Error("useUser must be used within an UserProvider");
  }
  return user;
};
