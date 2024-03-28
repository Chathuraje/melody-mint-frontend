import { Grid } from "@mui/material";

import CtaBack from "@/assets/homepage/cta-back.webp";
import TextWrapper from "./TextWrapper";

export const Cta = () => {
  const CTABackStyle = {
    backgroundImage: `url(${CtaBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid display="flex" padding="75px 65px" width="100%" height="100%">
      <Grid
        container
        borderRadius={8}
        style={CTABackStyle}
        maxWidth={1300}
        margin="auto"
      >
        <Grid
          xs={5}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <TextWrapper />
        </Grid>
        <Grid
          xs={7}
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
        ></Grid>
      </Grid>
    </Grid>
  );
};
