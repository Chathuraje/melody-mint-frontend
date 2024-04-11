import { ActiveChainList } from "@/components/ActiveChainList";
import { Grid } from "@mui/material";

export const SwitcherPopup = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="5px" padding="10px">
      <ActiveChainList />
    </Grid>
  );
};
