import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

export const InfoSection = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="20px">
      <Typography>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tellus in metus
        vulputate eu scelerisque. Ipsum nunc aliquet bibendum enim facilisis
        gravida neque. Turpis egestas pretium aenean pharetra magna ac placerat
        vestibulum. Sed velit dignissim sodales ut eu sem integer. Q Turpis
        egestas pretium aenean pharetra magna ac placerat vestibulum. Sed velit
        dignissim sodales ut eu sem integer. QTurpis egestas pretium aenean
        pharetra magna ac placerat vestibulum. Sed velit dignissim sodales ut eu
        sem integer. Q
      </Typography>
      <Grid display="flex" flexDirection="row" gap="20px" paddingBottom="10px">
        <Grid>
          <b>Items</b>: 60
        </Grid>
        <Grid>
          <b>Created</b>: 20 Jan 23
        </Grid>
        <Grid>
          <b>Distribution</b>: 2%
        </Grid>
      </Grid>
      <hr />
    </Grid>
  );
};
