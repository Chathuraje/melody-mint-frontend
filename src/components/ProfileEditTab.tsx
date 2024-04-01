import { Grid, Typography } from "@mui/material";

interface ProfileEditTabProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const ProfileEditTab = (props: ProfileEditTabProps) => {
  return (
    <Grid display="flex" flexDirection="column" gap="15px" paddingBottom="40px">
      <Grid
        display="flex"
        flexDirection="column"
        gap="5px"
        paddingBottom="20px"
      >
        <Typography variant="h5">{props.title}</Typography>
        <Typography variant="subtitle1" color="black" fontSize="14px">
          {props.description}
        </Typography>
      </Grid>
      <Grid>{props.children}</Grid>
    </Grid>
  );
};
