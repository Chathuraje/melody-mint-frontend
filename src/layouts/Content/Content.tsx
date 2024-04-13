import { LoadingScreen } from "@/components/LoadingScreen";
import { useLoading } from "@/hooks/useLoading";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const Content = () => {
  const { isLoading, setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Grid minHeight="100vh">
      {isLoading ? <LoadingScreen isLoading /> : <Outlet />}
    </Grid>
  );
};
