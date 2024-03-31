import { Grid } from "@mui/material";
import { NftLeftColumn } from "./NftFirstSection/NftLeftColumn";
import { NftRightColumn } from "./NftFirstSection/NftRightColumn";

export const NftFirstSection = () => {
  return (
    <Grid container justifyContent="center">
      <Grid display="flex" flexDirection="column" xs={4} gap="20px">
        <NftLeftColumn />
      </Grid>
      <Grid
        xs={8}
        display="flex"
        flexDirection="column"
        gap="25px"
        padding="0px 20px 5px 20px"
      >
        <NftRightColumn />
      </Grid>
    </Grid>
  );
};
