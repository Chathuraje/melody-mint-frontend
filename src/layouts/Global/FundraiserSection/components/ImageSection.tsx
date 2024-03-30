import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import FundraisePlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";

export const ImageSection = () => {
  const FundRaiserItem = {
    backgroundImage: `url(${FundraisePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Grid
        display="flex"
        style={FundRaiserItem}
        height="275px"
        borderRadius="8px"
        padding="10px"
        flexDirection="column"
        alignItems="flex-end"
      >
        <Box
          padding="8px 12px 8px 12px"
          bgcolor="secondary.light"
          borderRadius="16px"
        >
          2% distribution
        </Box>
      </Grid>
    </>
  );
};
