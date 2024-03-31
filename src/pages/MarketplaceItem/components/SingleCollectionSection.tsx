import { Unstable_Grid2 as Grid } from "@mui/material";
import { SingleCollectionCard } from "./SingleCollectionSection/SingleCollectionCard";

interface SingleCollectionSectionProp {
  amount: number;
}

export const SingleCollectionSection = (props: SingleCollectionSectionProp) => {
  return (
    <Grid container padding="0px" margin="0px" spacing={2}>
      {[...Array(props.amount)].map((_, index) => (
        <Grid key={index} xs={12} sm={6} md={3}>
          <SingleCollectionCard />
        </Grid>
      ))}
    </Grid>
  );
};
