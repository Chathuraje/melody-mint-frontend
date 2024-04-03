import { Unstable_Grid2 as Grid } from "@mui/material";
import { AnalystCard } from "./AnalystCard";

interface AnalystProp {
  amount: number;
}

export const AnalystSection = (props: AnalystProp) => {
  return (
    <Grid container padding="0px" margin="0px" spacing={2}>
      {[...Array(props.amount)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={3}>
          <AnalystCard />
        </Grid>
      ))}
    </Grid>
  );
};
