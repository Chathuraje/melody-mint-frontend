import { Unstable_Grid2 as Grid, IconButton } from "@mui/material";
import YoutubeIcon from "@/assets/profile/youtube.svg";
import SpotifyIcon from "@/assets/profile/spotify.svg";
import InstergramIcon from "@/assets/profile/instagram.svg";
import XIcon from "@/assets/profile/x.svg";

interface SocialIconsProps {
  names: ("spotify" | "instagram" | "youtube" | "x")[];
}

export const SocialIcons = (props: SocialIconsProps) => {
  const getLogoUrl = (name: string) => {
    switch (name) {
      case "spotify":
        return SpotifyIcon;
      case "instagram":
        return InstergramIcon;
      case "youtube":
        return YoutubeIcon;
      case "x":
        return XIcon;
      default:
        return "";
    }
  };

  return (
    <Grid display="flex" gap="15px">
      {props.names.map((name) => (
        <IconButton key={name} aria-label={name}>
          <img src={getLogoUrl(name)} alt={name} width="35px" height="35px" />
        </IconButton>
      ))}
    </Grid>
  );
};
