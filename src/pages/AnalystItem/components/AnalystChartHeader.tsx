import { Unstable_Grid2 as Grid, IconButton, Typography } from "@mui/material";
import { SelectOptions } from "@/components/ui/SelectOptions";
import { Download } from "@mui/icons-material";

interface AnalystChartHeaderProps {
  title: string;
  subtitle: string;
}

export const AnalystChartHeader = (props: AnalystChartHeaderProps) => {
  return (
    <Grid display="Flex" flexDirection="column" gap="25px" padding="25px">
      <Grid
        display="Flex"
        flexDirection="row"
        gap="25px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid display="Flex" flexDirection="column" gap="5px">
          <Typography variant="subtitle2" fontSize="26px" fontWeight="600">
            {props.title}
          </Typography>
          <Typography variant="subtitle2" fontSize="16px" fontWeight="300">
            {props.subtitle}
          </Typography>
        </Grid>
        <Grid>
          <IconButton color="primary">
            <Download />
          </IconButton>
          <SelectOptions items={["This Week", "This Month"]} />
        </Grid>
      </Grid>
    </Grid>
  );
};
