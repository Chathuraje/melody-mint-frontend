import FundRaiserCard from "@/components/FundRaiserCard";
import { Typography, Grid, Button } from "@mui/material";

export const HomeFundraise = () => {
  return (
    <Grid container direction="column" alignItems="center" gap="25px">
      <Grid display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h2">Featured fundraisers to support</Typography>

        <Typography variant="subtitle1" color="#000000B2">
          The more you invest, the more you earn
        </Typography>
      </Grid>

      <Grid container justifyContent="left">
        {[...Array(8)].map((_, index) => (
          <Grid item key={index} xs={12} sm={6} md={3} padding={1}>
            <FundRaiserCard />
          </Grid>
        ))}
      </Grid>

      <Grid item>
        <Button variant="outlined" color="secondary">
          View more fundraisers
        </Button>
      </Grid>
    </Grid>
  );
};
