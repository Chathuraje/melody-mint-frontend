import {
  Button,
  Unstable_Grid2 as Grid,
  Pagination as MuiPagination,
} from "@mui/material";

export const Pagination = () => {
  return (
    <Grid
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      padding="10px"
      alignItems="center"
      borderRadius="8px"
      border="1px solid rgba(0, 0, 0, 0.10)"
      bgcolor="var(--Shades-White, #FFF)"
      width="100%"
    >
      <Button variant="contained" color="secondary">
        Previous
      </Button>
      <MuiPagination count={11} defaultPage={6} siblingCount={0} />
      <Button variant="contained" color="primary">
        Next
      </Button>
    </Grid>
  );
};
