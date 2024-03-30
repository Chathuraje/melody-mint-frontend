import Feature1 from "@/assets/homepage/features-1.webp";
import Feature2 from "@/assets/homepage/features-2.webp";
import Feature3 from "@/assets/homepage/features-3.webp";
import Feature4 from "@/assets/homepage/features-4.webp";
import { FeatureFrame } from "./FeatureFrame";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const Features = () => {
  const fetureStyles = {
    borderRadius: "16px",
    bgcolor: "rgba(0, 0, 0, 0.04)",
    border: "solid 1px rgba(0, 0, 0, 0.08)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
  };

  return (
    <Grid display="flex" gap="20px" flexDirection="column">
      <Grid display="flex" gap="20px">
        <Grid display="flex" md={7} {...fetureStyles}>
          <FeatureFrame
            title="Look for fundraisers"
            description="Search for fundraisers via Melody Mint under different categories to invest"
            image={Feature1}
            padding="90px"
          />
        </Grid>
        <Grid display="flex" md={5} {...fetureStyles}>
          <FeatureFrame
            title="Look for fundraisers"
            description="Search for fundraisers via Melody Mint under different categories to invest"
            image={Feature2}
            padding="90px"
          />
        </Grid>
      </Grid>
      <Grid display="flex" gap="20px">
        <Grid md={5} {...fetureStyles}>
          <FeatureFrame
            title="Wallet connectivity"
            description="Connect your desirable wallet"
            image={Feature3}
            padding="0px"
          />
        </Grid>
        <Grid display="flex" md={9} {...fetureStyles}>
          <FeatureFrame
            title="Look for fundraisers"
            description="Search for fundraisers via Melody Mint under different categories to invest"
            image={Feature4}
            padding="0px"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
