import { Grid, Tab, Tabs, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WalletIcon from "@mui/icons-material/Wallet";
import SecurityIcon from "@mui/icons-material/Security";
import LogoutIcon from "@mui/icons-material/Logout";

interface LeftSliderbarProps {
  value: number;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}

export const LeftSliderbar = (props: LeftSliderbarProps) => {
  const customStyles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "left",
    gap: "20px",
  };

  return (
    <Grid
      xs={12}
      sm={3}
      style={{
        borderRight: "1px solid #e0e0e0", // Added border
        boxShadow: "4px 0px 5px rgba(0,0,0,0.05)", // Left shadow
      }}
    >
      <Typography variant="h5" sx={{ padding: "20px" }}>
        Settings
      </Typography>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.value}
        onChange={props.handleChange}
        sx={{
          position: "sticky",
          top: 100,
        }}
      >
        <Tab
          icon={<BadgeIcon />}
          label="Profile Details"
          sx={{ ...customStyles }}
        />
        <Tab
          icon={<AccountCircleIcon />}
          label="Personal Details"
          sx={{ ...customStyles }}
        />
        <Tab
          icon={<WalletIcon />}
          label="Wallet Details"
          sx={{ ...customStyles }}
        />
        <Tab
          icon={<SecurityIcon />}
          label="Security"
          sx={{ ...customStyles }}
        />
        <Tab icon={<LogoutIcon />} label="Logout" sx={{ ...customStyles }} />
      </Tabs>
    </Grid>
  );
};
