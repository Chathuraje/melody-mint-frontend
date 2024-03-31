import { Unstable_Grid2 as Grid } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { Card } from "@/components/ui/Card";
import { AnalystChartHeader } from "./AnalystChartHeader";

export const AnalystChart = () => {
  return (
    <Card>
      <Grid display="Flex" flexDirection="column" gap="25px" padding="25px">
        <AnalystChartHeader
          title="Music track overview"
          subtitle="last updated 1 min ago"
        />

        <Grid>
          <LineChart
            xAxis={[
              { scaleType: "point", data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
            ]}
            series={[
              {
                curve: "linear",
                data: [0, 50, 20, 60, 5, 90, 3],
                label: "Platform 1",
              },
              {
                curve: "linear",
                data: [0, 3, 70, 90, 40, 9, 30],
                label: "Platform 2",
              },
            ]}
            height={500}
            margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
            grid={{ horizontal: true }}
          />
          ,
        </Grid>
      </Grid>
    </Card>
  );
};
