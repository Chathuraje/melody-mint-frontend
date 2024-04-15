import { Grid, Tabs, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WalletIcon from "@mui/icons-material/Wallet";
import SecurityIcon from "@mui/icons-material/Security";
import PaymentsIcon from "@mui/icons-material/Payments";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { TabItem } from "./TabItem";
interface LeftSliderbarProps {
  value: number;
  handleChange: (_event: React.SyntheticEvent, newValue: number) => void;
}

export const LeftSliderbar = (props: LeftSliderbarProps) => {
  return (
    <Grid
      xs={12}
      sm={3}
      style={{
        borderRight: "1px solid #e0e0e0",
        boxShadow: "4px 0px 5px rgba(0,0,0,0.05)",
        height: "100vh",
      }}
    >
      <Typography variant="h5" sx={{ padding: "20px" }}>
        Settings
      </Typography>
      <Tabs
        orientation="vertical"
        value={props.value}
        onChange={props.handleChange}
        sx={{
          position: "sticky",
          top: 100,
        }}
      >
        <TabItem icon={<BadgeIcon />} label="Profile Details" />
        <TabItem icon={<AccountCircleIcon />} label="Personal Details" />
        <TabItem icon={<MonetizationOnIcon />} label="Income Details" />
        <TabItem icon={<PaymentsIcon />} label="Withdrawal Details" />
        <TabItem icon={<WalletIcon />} label="Wallet Details" />
        <TabItem icon={<SecurityIcon />} label="Security" />
      </Tabs>
    </Grid>
  );
};
