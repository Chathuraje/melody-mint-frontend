import { Button, Grid } from "@mui/material";
import { useState } from "react";

interface ToggleSwitchProps {
  values: string[];
}

export const ToggleSwitch = (props: ToggleSwitchProps) => {
  const { values } = props;

  const [selectedOption, setSelectedOption] = useState(values[0]);

  const handleToggle = (option: string) => {
    setSelectedOption(option);
    console.log(option);
  };

  const buttonStyle = {
    padding: "10px 20px",
    color: "white",
    borderRadius: "10px",
    transition:
      "background-color 0.3s ease, transform 0.3s ease, color 0.3s ease", // Added color transition
    "&:hover": {
      backgroundColor: "#1d4ed8",
      color: "white",
      transform: "translateX(0)", // Reset transform on hover
    },
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "black",
  };

  const inactiveButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#1d4ed8",
  };

  return (
    <Grid>
      <Grid display="flex" bgcolor="#1d4ed8" borderRadius="20px" gap="10px">
        {values.map((value) => (
          <Button
            key={value}
            disableRipple
            disableElevation
            variant="contained"
            sx={
              selectedOption === value ? activeButtonStyle : inactiveButtonStyle
            }
            onClick={() => handleToggle(value)}
          >
            {value}
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};
