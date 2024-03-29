import CtaBack from "@/assets/homepage/cta-back.webp";
import { TextWrapper } from "./TextWrapper";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const Cta = () => {
  const CTABackStyle = {
    backgroundImage: `url(${CtaBack})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid display="flex" borderRadius={8} style={CTABackStyle}>
      <Grid display="flex" md={5}>
        <TextWrapper />
      </Grid>
      <Grid md={7}></Grid>
    </Grid>
  );
};
