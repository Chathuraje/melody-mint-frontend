import { ToggleButtonGroup, Typography, ToggleButton } from "@mui/material";

export const ToggleButtons = () => {
  return (
    <ToggleButtonGroup exclusive>
      <ToggleButton value="trending">
        <Typography variant="body1">Trending </Typography>
      </ToggleButton>
      <ToggleButton value="top">
        <Typography variant="body1">Top</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
