import CtaBack2 from "@/assets/homepage/cta-back2.webp";
import { TextWrapper } from "./TextWrapper";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";

export const Cta2 = () => {
  return (
    <Grid
      borderRadius={8}
      bgcolor="#000513"
      display="flex"
      padding=" 55px"
      gap="75px"
    >
      <Grid display="flex" md={7}>
        <TextWrapper />
      </Grid>
      <Grid display="flex" md={5}>
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
