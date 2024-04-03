import { Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";

interface Cta {
  title: string;
  subtitle: string;
  image: string;
}

export const Cta = (props: Cta) => {
  const CTABackStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const HeaderTextStyle = {
    background:
      "-webkit-linear-gradient(180deg, #fff 30%, rgba(255, 255, 255, 0.75) 90%)",
    webkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  return (
    <Grid display="flex" borderRadius={8} style={CTABackStyle}>
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        margin="auto"
        gap="22px"
        padding="100px"
      >
        <Typography variant="h3" style={HeaderTextStyle}>
          {props.title}
        </Typography>
        <Typography variant="subtitle1">{props.subtitle}</Typography>
        <Button variant="contained" color="secondary">
          Start for free
        </Button>
      </Grid>
    </Grid>
  );
};
