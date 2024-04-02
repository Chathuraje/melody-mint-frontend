import { InvestTextBox } from "@/components/ui/InvestTextBox";
import { Button, Unstable_Grid2 as Grid, Typography } from "@mui/material";

export const InvestForm = () => {
  return (
    <>
      <Grid
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        width="100%"
        gap="15px"
      >
        <Typography
          variant="subtitle1"
          color="black"
          fontSize="14px"
          fontWeight="200"
        >
          Enter your investment to support the artist
        </Typography>
        <Grid container display="flex" flexDirection="row" alignItems="center">
          <InvestTextBox />
        </Grid>
        <Button fullWidth variant="contained" color="primary">
          Invest
        </Button>
      </Grid>

      <Grid
        display="flex"
        flexDirection="column"
        alignContent="center"
        justifyContent="center"
        width="100%"
        gap="15px"
      >
        <Button fullWidth variant="contained" color="primary">
          Edit
        </Button>
        <Button fullWidth variant="contained" color="primary">
          Release Fund
        </Button>
      </Grid>
    </>
  );
};
