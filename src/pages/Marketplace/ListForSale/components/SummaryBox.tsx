import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Unstable_Grid2 as Grid } from "@mui/material";

export const SummaryBox = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="25px">
      <Grid container display="flex" flexDirection="column" gap="25px">
        <Grid
          width="50%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" color="black" fontSize="14px">
            <b>Listing Price</b>:
          </Typography>
          <Grid display="flex" flexDirection="row" gap="10px" alignItems="left">
            <Typography variant="subtitle1" color="black" fontSize="14px">
              1 ETH
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>

      <Grid container display="flex" flexDirection="column" gap="25px">
        <Grid
          width="50%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" color="black" fontSize="14px">
            <b>Listing Price</b>:
          </Typography>
          <Grid display="flex" flexDirection="row" gap="10px" textAlign="left">
            <Typography variant="subtitle1" color="black" fontSize="14px">
              291 ETH
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>

      <Grid container display="flex" flexDirection="column" gap="25px">
        <Grid
          width="50%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography variant="subtitle1" color="black" fontSize="14px">
            <b>Listing Price</b>:
          </Typography>
          <Grid display="flex" flexDirection="row" gap="10px" alignItems="left">
            <Typography variant="subtitle1" color="black" fontSize="14px">
              1 ETH
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>

      <Grid container display="flex" flexDirection="column" gap="25px">
        <Grid
          width="50%"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Typography color="black" fontSize="24px">
            Total potential earnings
          </Typography>
          <Grid display="flex" flexDirection="row" gap="10px" alignItems="left">
            <Typography color="black" fontSize="18px">
              <b>0.875 ETH</b>
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" />
      </Grid>
    </Grid>
  );
};
