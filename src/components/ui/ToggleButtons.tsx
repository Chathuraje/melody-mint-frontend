import { ToggleButtonGroup, Typography, ToggleButton } from "@mui/material";

interface ToggleButtonsProp {
  values: string[];
}

export const ToggleButtons = (props: ToggleButtonsProp) => {
  return (
    <ToggleButtonGroup exclusive>
      {props.values.map((value) => (
        <ToggleButton key={value} value={value}>
          <Typography variant="body1">{value}</Typography>
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
