import { LoadingContext } from "@/context/LoadingProvider";
import { useContext } from "react";

export const useLoading = () => {
  const loading = useContext(LoadingContext);
  if (!loading) {
    throw new Error("useLoading must be used within an LoadingProvider");
  }
  return loading;
};
