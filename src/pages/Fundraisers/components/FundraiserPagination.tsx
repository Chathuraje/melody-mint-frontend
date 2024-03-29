import { Unstable_Grid2 as Grid, Pagination } from "@mui/material";
import { Button } from "@/components/ui";

export const FundraiserPagination = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="16px"
      alignItems="center"
      borderRadius="8px"
      border="1px solid rgba(0, 0, 0, 0.10)"
      bgcolor="var(--Shades-White, #FFF)"
    >
      <Button text="Previous" typeofButtons="secondary" />
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Button text="Next" typeofButtons="tertiary-dark-inverse" />
    </Grid>
  );
};
