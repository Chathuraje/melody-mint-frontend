import { Button as MuiButton } from "@mui/material";

interface ButtonProps {
  text: string;
  typeofButtons: "main" | "secondary" | "tertiary";
}

export const Button = (props: ButtonProps) => {
  let buttonStyles = {};

  switch (props.typeofButtons) {
    case "main":
      buttonStyles = {
        backgroundColor: "primary.main",
        color: "secondary.light",
        "&:hover": {
          backgroundColor: "primary.light",
        },
      };
      break;
    case "secondary":
      buttonStyles = {
        backgroundColor: "secondary.light",
        color: "secondary.dark",
        "&:hover": {
          backgroundColor: "transparent",
          color: "secondary.light",
          border: "1px solid",
          borderColor: "secondary.light",
        },
      };
      break;
    case "tertiary":
      buttonStyles = {
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "secondary.light",
        color: "secondary.light",
        "&:hover": {
          backgroundColor: "secondary.light",
          color: "secondary.dark",
        },
      };
      break;
    default:
      break;
  }

  return (
    <MuiButton
      sx={{
        textTransform: "none",
        display: "flex",
        padding: "10px 22px",
        alignItems: "center",
        gap: "2px",
        borderRadius: "8px",
        border: "1px solid #1d4ed8",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
        ...buttonStyles,
      }}
    >
      {props.text}
    </MuiButton>
  );
};
