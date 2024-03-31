import {
  Box,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from "@mui/material";

export const CurrentProgress = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="5px">
      <Typography variant="h4" color="black">
        Eth 0.1 Raised
      </Typography>
      <Box width="100%">
        <LinearProgress color="primary" variant="determinate" value={55} />
      </Box>
      <Typography variant="subtitle1" color="black" fontSize="14px">
        Goal: 1 ETH
      </Typography>
    </Grid>
  );
};
