import { Grid } from "@mui/material";
import { UploadIcon } from "./UploadIcon";
import ProfileImagePlaceholder from "@/assets/profile/profile-placeholder.svg";

interface ProfileImageProp {
  src?: string;
  upload?: boolean;
}

export const ProfileImage = (props: ProfileImageProp) => {
  const ProfileImageStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "190px",
    width: "190px",
    borderRadius: "50%",
    border: "2px solid #1D4ED8",
  };

  if (props.src === undefined || props.src === "") {
    ProfileImageStyle.backgroundImage = `url(${ProfileImagePlaceholder})`;
  }

  return (
    <Grid style={ProfileImageStyle}>{props.upload && <UploadIcon />}</Grid>
  );
};
