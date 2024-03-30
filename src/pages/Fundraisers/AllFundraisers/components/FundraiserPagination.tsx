import { Button, Unstable_Grid2 as Grid, Pagination } from "@mui/material";

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
      <Button variant="contained" color="secondary">
        Previous
      </Button>
      <Pagination count={11} defaultPage={6} siblingCount={0} />
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Grid>
  );
};
