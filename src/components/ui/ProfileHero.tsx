import { Grid } from "@mui/material";
import { UploadIcon } from "./UploadIcon";
import ProfileHeroPlaceholder from "@/assets/profile/profile-hero-palceholder.webp";

interface ProfileHeroProp {
  src?: string;
  height: string;
  border?: boolean;
  upload?: boolean;
  width?: string;
}

export const ProfileHero = (props: ProfileHeroProp) => {
  const ProfileHeroStyle = {
    backgroundImage: `url(${props.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "none",
  };

  if (props.src === undefined || props.src === "") {
    ProfileHeroStyle.backgroundImage = `url(${ProfileHeroPlaceholder})`;
  }

  if (props.border) {
    ProfileHeroStyle.border = "2px solid #1D4ED8";
  }

  return (
    <Grid style={ProfileHeroStyle} height={props.height} width={props.width}>
      {props.upload && <UploadIcon />}
    </Grid>
  );
};
