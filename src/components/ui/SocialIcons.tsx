import { Unstable_Grid2 as Grid, IconButton } from "@mui/material";
import YoutubeIcon from "@/assets/profile/youtube.svg";
import SpotifyIcon from "@/assets/profile/spotify.svg";
import InstergramIcon from "@/assets/profile/instagram.svg";
import XIcon from "@/assets/profile/x.svg";
import Website from "@/assets/profile/instagram.svg";

interface SocialMediaLinks {
  [key: string]: string;
}

interface SocialIconsProps {
  names: string[];
  hrefs: SocialMediaLinks;
}

export const SocialIcons = (props: SocialIconsProps) => {
  const { names, hrefs } = props;

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
      case "website":
        return Website;
      case "discord":
        return Website;
      default:
        return "";
    }
  };

  return (
    <Grid display="flex" gap="15px">
      {names.map((name) => (
        <IconButton
          target="_blank"
          href={hrefs[name]}
          key={name}
          aria-label={name}
        >
          <img src={getLogoUrl(name)} alt={name} width="35px" height="35px" />
        </IconButton>
      ))}
    </Grid>
  );
};
