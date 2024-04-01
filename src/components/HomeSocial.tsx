import DiscordSiteIcon from "@/assets/discord.svg";
import XSiteIcon from "@/assets/x.svg";
import InstagramSiteIcon from "@/assets/instagram.svg";
import FacebookSiteIcon from "@/assets/facebook.svg";
import YoutubeSiteIcon from "@/assets/youtube.svg";
import { Grid, IconButton } from "@mui/material";

const socialMediaIcons = [
  { icon: DiscordSiteIcon, alt: "discord" },
  { icon: XSiteIcon, alt: "x-twitter" },
  { icon: InstagramSiteIcon, alt: "instagram" },
  { icon: FacebookSiteIcon, alt: "facebook" },
  { icon: YoutubeSiteIcon, alt: "youtube" },
];

export const HomeSocial = () => {
  const size = "28px";

  return (
    <Grid container direction="row" spacing={1}>
      {socialMediaIcons.map(({ icon, alt }, index) => (
        <IconButton key={index}>
          <img src={icon} alt={alt} width={size} height={size} />
        </IconButton>
      ))}
    </Grid>
  );
};
