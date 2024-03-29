import { Button } from "@/components/ui";
import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

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
        <Button text="Start for free" typeofButtons="secondary" />
        <Button text="Join as an artist" typeofButtons="tertiary" />
      </Box>
    </Grid>
  );
};
