import { Button } from "@/components/ui";
import { Grid, Typography } from "@mui/material";

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
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
      gap="22px"
    >
      <Typography variant="h3" style={HeaderTextStyle}>
        This is where your music journey begins
      </Typography>
      <Typography variant="subtitle1">
        Start your music journey with Melody-Mint and gain the exposure to be a
        future superstar
      </Typography>
      <Button text="Start for free" typeofButtons="secondary" />
    </Grid>
  );
};
