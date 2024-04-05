import { Grid } from "@mui/material";
import { UploadIcon } from "./UploadIcon";
import ProfileImagePlaceholder from "@/assets/profile/profile-placeholder.svg";

interface ProfileImageProp {
  src?: string | React.ReactNode;
  upload?: boolean;
  dimentions?: string;
  border?: boolean;
}

export const ProfileImage = (props: ProfileImageProp) => {
  const { src, upload, dimentions, border } = props;

  const wh = dimentions || "190px";

  const ProfileImageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    border: "none",
  };

  if (border) {
    ProfileImageStyle.border = "2px solid #1D4ED8";
  }

  if (props.src === undefined || props.src === "") {
    ProfileImageStyle.backgroundImage = `url(${ProfileImagePlaceholder})`;
  }

  return (
    <Grid style={ProfileImageStyle} height={wh} width={wh}>
      {upload && <UploadIcon />}
    </Grid>
  );
};
