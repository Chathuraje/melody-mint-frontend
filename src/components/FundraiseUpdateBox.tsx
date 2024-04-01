import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

interface FundraiseUpdateBoxProps {
  title: string;
  description: string;
}

export const FundraiseUpdateBox = (props: FundraiseUpdateBoxProps) => {
  return (
    <Grid
      container
      display="flex"
      flexDirection="column"
      gap="15px"
      border="1px solid #E0E0E0"
      padding="15px"
      borderRadius="10px"
    >
      <Typography variant="h6" color="black" fontSize="18px" fontWeight="bold">
        {props.title}
      </Typography>
      <Typography variant="subtitle1" color="black" fontSize="16px">
        {props.description}
      </Typography>
    </Grid>
  );
};
