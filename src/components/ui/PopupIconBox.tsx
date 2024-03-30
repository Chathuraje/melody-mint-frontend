import { Box, Grid, Typography } from "@mui/material";

interface PopupIconBoxPops {
  image: string;
  text: string;
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
      bgcolor="#F6F6F6"
      borderRadius="8px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.05)"
      style={{ flexGrow: 1 }}
      sx={{
        "&:hover": {
          cursor: "pointer",
          border: "3px solid #E7E7E7",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.10)",
        },
      }}
    >
      <Box component="img" src={pops.image} width="35%" height="35%" />
      <Typography variant="h5" fontWeight="400">
        {pops.text}
      </Typography>
    </Grid>
  );
};
