import { Box, Typography, Unstable_Grid2 as Grid } from "@mui/material";

interface FeatureFrameProp {
  title: string;
  description: string;
  image: string;
  padding: string;
}

export const FeatureFrame = (prop: FeatureFrameProp) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="18px"
      justifyContent="space-between"
    >
      <Grid>
        <Box
          component="img"
          src={prop.image}
          alt="Hero Image"
          height="100%"
          width="100%"
          paddingTop={prop.padding}
          paddingLeft={prop.padding}
          paddingRight={prop.padding}
        />
      </Grid>
      <Grid flexDirection="column" alignItems="left" gap="4px" padding="35px">
        <Typography variant="h4">{prop.title}</Typography>

        <Typography variant="subtitle2" color="#000000B2">
          {prop.description}
        </Typography>
      </Grid>
    </Grid>
  );
};
