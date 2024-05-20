import { Card } from "@/components/ui/Card";
import AnalystPlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";
import { Box, Unstable_Grid2 as Grid, Typography } from "@mui/material";
interface Records {
  date?: string;
  time?: string;
  duration?: string;
}

interface PlatformDetails {
  platform_name?: string;
  stream_count?: number;
  records?: Records[];
}

interface AnalystCardData {
  id?: string;
  title?: string;
  user_id?: string;
  type?: string;
  total_stream?: number;
  total_platform?: number;
  total_time?: number;
  platform_details?: PlatformDetails[];
}

type AnalystCardTypes = (data: AnalystCardData) => JSX.Element;

export const AnalystCard: AnalystCardTypes = (data) => {
  const { title, total_platform } = data;

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
        flexDirection="column"
        alignItems="flex-end"
      ></Grid>
      <Grid
        gap="16px"
        display="flex"
        flexDirection="column"
        padding="15px 15px 15px 15px"
      >
        <Typography variant="h5">{title}</Typography>
        <Typography variant="subtitle2" color="#6D6D6D">
          Platforms: {total_platform}
        </Typography>

        <Box>
          <Typography variant="subtitle2" color="#6D6D6D">
            <b>Tracking...</b>
          </Typography>
        </Box>
      </Grid>
    </Card>
  );
};
