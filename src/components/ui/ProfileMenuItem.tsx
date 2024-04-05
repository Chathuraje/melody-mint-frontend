import { Grid, MenuItem, Typography } from "@mui/material";

interface ProfileMenuItemProps {
  onClick?: () => void;
  icon?: React.ReactNode;
  subText?: string;
  mainText: string;
  textColor?: string;
}

export const ProfileMenuItem = (props: ProfileMenuItemProps) => {
  const { onClick, subText, mainText, icon, textColor } = props;

  return (
    <MenuItem onClick={onClick}>
      <Grid
        display="flex"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        gap="15px"
        width="100%"
      >
        {icon}
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="left"
          alignItems="left"
        >
          <Typography
            fontSize="14px"
            maxWidth="170px"
            sx={{
              whiteSpace: "nowrap",
            }}
            noWrap
            color={textColor}
          >
            {mainText}
          </Typography>
          <Typography fontSize="12px" color={textColor}>
            {subText}
          </Typography>
        </Grid>
      </Grid>
    </MenuItem>
  );
};
