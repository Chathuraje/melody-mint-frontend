import CtaBack2 from "@/assets/homepage/cta-back2.webp";
import { TextWrapper } from "./TextWrapper";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";

export const Cta2 = () => {
  return (
    <Grid display="flex" borderRadius={8} bgcolor="#000513" padding="75px">
      <Grid md={6}>
        <TextWrapper />
      </Grid>
      <Grid md={6}>
        <Box
          component="img"
          src={CtaBack2}
          alt="CTA Image"
          height="100%"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};
