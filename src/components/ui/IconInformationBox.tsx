import { Unstable_Grid2 as Grid, Typography } from "@mui/material";

interface IconInformationBoxProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const IconInformationBox = (props: IconInformationBoxProps) => {
  return (
    <Grid display="flex" flexDirection="row" gap="25px">
      <Grid display="flex" alignItems="center">
        {props.icon}
      </Grid>
      <Grid>
        <Typography variant="subtitle1" color="black" fontSize="16px">
          <b>{props.title}</b>
        </Typography>
        <Typography variant="subtitle1" color="black" fontSize="14px">
          {props.value}
        </Typography>
      </Grid>
    </Grid>
  );
};
