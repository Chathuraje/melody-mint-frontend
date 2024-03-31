import { Grid } from "@mui/material";

interface CardProp {
  children: React.ReactNode;
}

export const Card = (prop: CardProp) => {
  return (
    <Grid
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
      }}
    >
      {prop.children}
    </Grid>
  );
};
