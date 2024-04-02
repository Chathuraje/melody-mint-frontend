import { Box, Grid, Typography } from "@mui/material";

interface PopupIconBoxPops {
  image: string;
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export const PopupIconBox = (pops: PopupIconBoxPops) => {
  return (
    <Grid
      display="flex"
      gap="25px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      border="1px solid #E7E7E7"
      bgcolor={pops.isSelected ? "#F6F6F6" : "transparent"}
      borderColor={pops.isSelected ? "#1D4ED8" : "transparent"}
      borderRadius="8px"
      boxShadow={
        pops.isSelected
          ? "0px 4px 4px rgba(0, 0, 0, 0.08)"
          : "0px 4px 4px rgba(0, 0, 0, 0.05)"
      }
      style={{ flexGrow: 1 }}
      sx={{
        "&:hover": {
          cursor: "pointer",
          boxShadow: pops.isSelected
            ? "0px 4px 4px rgba(0, 0, 0, 0.05)"
            : "0px 4px 4px rgba(0, 0, 0, 0.08)",
        },
      }}
      onClick={pops.onClick}
    >
      <Box component="img" src={pops.image} width="35%" height="35%" />
      <Typography variant="h5" fontWeight="400">
        {pops.text}
      </Typography>
    </Grid>
  );
};
