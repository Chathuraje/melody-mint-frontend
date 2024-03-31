import { Card } from "@/components/ui/Card";
import AnalystPlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";

export const AnalystCard = () => {
  const AnalystImage = {
    backgroundImage: `url(${AnalystPlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Card>
      <Grid
        display="flex"
        style={AnalystImage}
        height="200px"
        borderRadius="8px"
        padding="10px"
        flexDirection="column"
        alignItems="flex-end"
      ></Grid>
      <Grid
        gap="16px"
        padding="8px 8px 24px 8px"
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        alignSelf="stretch"
      >
        <Typography variant="h5">Music Title</Typography>
        <Typography variant="subtitle2" color="#6D6D6D">
          Platforms Count
        </Typography>

        <Box>
          <Typography variant="subtitle2" color="#6D6D6D">
            <b>Tracking</b>
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
};
