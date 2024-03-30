import { Typography, Unstable_Grid2 as Grid, Button } from "@mui/material";

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
      flexDirection="column"
      alignItems="center"
      margin="auto"
      gap="22px"
      padding="100px"
    >
      <Typography variant="h3" style={HeaderTextStyle}>
        Become an artist, fund your music
      </Typography>
      <Typography variant="subtitle1">
        By starting a fundraiser, you can collect investments to fund your music
      </Typography>
      <Button variant="contained" color="secondary">
        Start for free
      </Button>
    </Grid>
  );
};
