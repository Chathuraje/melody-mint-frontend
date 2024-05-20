import { Card } from "@/components/ui/Card";
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

interface AnalystStatsProps {
  title: string;
  value: string;
  metrics: string;
  subtitle: string;
}

export const AnalystStatsBox = (props: AnalystStatsProps) => {
  return (
    <Card>
      <Grid padding="30px" display="flex" flexDirection="column" gap="45px">
        <Typography variant="subtitle2" fontSize="20px" fontWeight="600">
          {props.title}
        </Typography>
        <Grid display="flex" flexDirection="row" gap="10px">
          <Typography
            fontSize="62px"
            fontWeight="500"
            alignSelf="flex-end"
            lineHeight="50px"
          >
            <b>{props.value}</b>
          </Typography>
          <Typography
            variant="subtitle2"
            fontSize="20px"
            fontWeight="300"
            alignSelf="flex-end"
          >
            {props.metrics}
          </Typography>
        </Grid>
        {/* <Grid display="flex" flexDirection="row" gap="10px" alignItems="center">
          <AutoGraphIcon color="primary" />
          <Typography
            variant="subtitle2"
            fontSize="16px"
            fontWeight="300"
            color="primary"
          >
            <b>{props.subtitle}</b>
          </Typography>
        </Grid> */}
      </Grid>
    </Card>
  );
};
