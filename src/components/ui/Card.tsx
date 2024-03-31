import { Grid } from "@mui/material";

interface CardProp {
  children: React.ReactNode;
}

export const Card = (prop: CardProp) => {
  return (
    <Grid
      display="flex"
      flexDirection="column"
      border="1px solid #E0E0E0"
      gap="10px"
      width="100%"
      sx={{
        borderRadius: "10px",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
      }}
    >
      {prop.children}
    </Grid>
  );
};
