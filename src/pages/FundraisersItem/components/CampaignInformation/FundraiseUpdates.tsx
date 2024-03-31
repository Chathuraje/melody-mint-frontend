import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { FundraiseUpdateBox } from "./FundraiseUpdateBox";

export const FundraiseUpdates = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="25px">
      <Typography variant="h5" color="black" fontSize="28px">
        Fundraiser updates
      </Typography>
      <Grid
        container
        display="flex"
        flexDirection="row"
        gap="15px"
        overflow="auto"
        maxHeight="700px"
      >
        <FundraiseUpdateBox
          title="Update 23/01/2023"
          description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
        />

        <FundraiseUpdateBox
          title="Update 23/01/2023"
          description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
        />

        <FundraiseUpdateBox
          title="Update 23/01/2023"
          description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
        />

        <FundraiseUpdateBox
          title="Update 23/01/2023"
          description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
        />

        <FundraiseUpdateBox
          title="Update 23/01/2023"
          description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
        />
      </Grid>
    </Grid>
  );
};
