import { IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export const UploadIcon = () => {
  return (
    <IconButton
      style={{
        fontSize: "3rem",
        backgroundColor: "#1D4ED8",
        color: "white",
      }}
    >
      <CloudUploadIcon />
    </IconButton>
  );
};
