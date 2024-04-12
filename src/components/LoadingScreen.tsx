import { Backdrop, CircularProgress } from "@mui/material";

interface LoadingScreenProps {
  isLoading: boolean;
}

export const LoadingScreen = (props: LoadingScreenProps) => {
  const { isLoading } = props;

  return (
    <Backdrop open={isLoading} style={{ zIndex: 9999, color: "#fff" }}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
