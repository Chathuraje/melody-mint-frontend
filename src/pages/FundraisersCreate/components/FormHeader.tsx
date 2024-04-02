import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

export const FormHeader = () => {
  return (
    <Grid display="flex" flexDirection="column" gap="15px">
      <Typography variant="h3">Create a Fundraiser</Typography>
      <Typography variant="subtitle2" color="black">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
        Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos.
      </Typography>
    </Grid>
  );
};
