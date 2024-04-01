import { Unstable_Grid2 as Grid } from "@mui/material";
import FundRaiserCard from "../../../components/FundRaiserCard";

interface FundRaiserCardProp {
  amount: number;
}

export const FundraiserSection = (data: FundRaiserCardProp) => {
  return (
    <Grid container padding="0px" margin="0px" spacing={2}>
      {[...Array(data.amount)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={3}>
          <FundRaiserCard />
        </Grid>
      ))}
    </Grid>
  );
};
