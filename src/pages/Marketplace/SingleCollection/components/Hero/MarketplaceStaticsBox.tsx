import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

interface MarketplaceStaticsBoxProps {
  title: string;
  value: string;
}

export const MarketplaceStaticsBox = (props: MarketplaceStaticsBoxProps) => {
  return (
    <Grid>
      <Typography variant="subtitle1" color="white" fontWeight="600">
        {props.title}
      </Typography>
      <Typography variant="subtitle2" color="white">
        {props.value}
      </Typography>
    </Grid>
  );
};
