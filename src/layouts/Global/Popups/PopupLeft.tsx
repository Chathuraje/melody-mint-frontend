import { Grid, Typography } from "@mui/material";

interface PopupLeftProp {
  title: string;
  subtitle: string;
}

export const PopupLeft = (props: PopupLeftProp) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="left"
      margin="35px"
      gap="20px"
    >
      <Typography variant="h2" color="white" fontSize="48px" lineHeight="1.4">
        {props.title}
      </Typography>
      <Typography variant="subtitle1">{props.subtitle}</Typography>
    </Grid>
  );
};
