import { Box, Typography, Unstable_Grid2 as Grid, Button } from "@mui/material";

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
      alignItems="left"
      justifyContent="center"
      gap="32px"
    >
      <Typography variant="h1" style={HeaderTextStyle}>
        Invest & Earn with Music
      </Typography>
      <Typography variant="subtitle1">
        Invest in Funds created by Music artist and earn royalties
      </Typography>
      <Box alignItems="left" display="flex" gap="22px" justifyContent="left">
        <Button variant="contained" color="secondary">
          Start for free
        </Button>
        <Button variant="outlined" color="secondary">
          Join as an artist
        </Button>
      </Box>
    </Grid>
  );
};
