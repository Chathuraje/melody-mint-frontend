import { Unstable_Grid2 as Grid } from "@mui/material";
import { ImageSection } from "./ImageSection";
import { TextSection } from "./TextSection";

const FundRaiserCard = () => {
  return (
    <Grid
      flexDirection="column"
      alignItems="left"
      justifyContent="flex-start"
      gap="8px"
      borderRadius="6px"
      padding="12px"
      border="1px solid rgba(0, 0, 0, 0.05)"
      bgcolor="secondary.light"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
    >
      <ImageSection />
      <TextSection />
    </Grid>
  );
};

export default FundRaiserCard;
