import { Grid } from "@mui/material";
import { ImageSection } from "./ImageSection";
import { TextSection } from "./TextSection";

const FundRaiserCard = () => {
  return (
    <Grid
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
      }}
    >
      <ImageSection />
      <TextSection />
    </Grid>
  );
};

export default FundRaiserCard;
