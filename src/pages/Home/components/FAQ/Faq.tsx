import { Grid, Typography } from "@mui/material";
import { SingleFaq } from "./SingleFaq";

export const Faq = () => {
  return (
    <Grid display="flex" flexDirection="column" alignItems="center" gap="35px">
      <Grid
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h2">Frequently Asked Questions</Typography>

        <Typography variant="subtitle1" color="#000000B2">
          If you have any questions do not hesitate to send them to
          ask@mintmelody.com or visit our help center
        </Typography>
      </Grid>
      <Grid>
        <SingleFaq />
      </Grid>
    </Grid>
  );
};
