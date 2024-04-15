import { useContext } from "react";
import { ProfileContext } from "../context/ProfileProvider";

export const useProfile = () => {
  const profile = useContext(ProfileContext);
  if (!profile) {
    throw new Error("useProfile must be used within an ProfileProvider");
  }
  return profile;
};
