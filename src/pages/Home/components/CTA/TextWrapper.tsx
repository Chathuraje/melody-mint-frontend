import { Button } from "@/components/ui";
import { Typography, Unstable_Grid2 as Grid } from "@mui/material";

export const TextWrapper = () => {
  const HeaderTextStyle = {
    background:
      "-webkit-linear-gradient(180deg, #fff 30%, rgba(255, 255, 255, 0.75) 90%)",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Grid
      display="flex"
      alignItems="flex-start"
      flexDirection="column"
      gap="22px"
      width="100%"
      padding="75px 0 75px 65px"
    >
      <Typography variant="h3" style={HeaderTextStyle}>
        Become an artist, fund your music
      </Typography>
      <Typography variant="subtitle1">
        By starting a fundraiser, you can collect investments to fund your music
      </Typography>
      <Button text="Start for free" typeofButtons="secondary" />
    </Grid>
  );
};
