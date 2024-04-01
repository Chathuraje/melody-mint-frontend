import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { ProfileTab } from "./components/ProfileTab";
import { PersonalTab } from "./components/PersonalTab";
import { LogoutTab } from "./Tabs/LogoutTab";
import { SecurityTab } from "./Tabs/SecurityTab";
import { WalletTab } from "./Tabs/WalletTab";
import { LeftSliderbar } from "./components/LeftSliderbar";

export const EditUser = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Grid container>
        <LeftSliderbar value={value} handleChange={handleChange} />

        <Grid
          xs={12}
          sm={9}
          style={{
            padding: "20px",
          }}
        >
          {value === 0 && <ProfileTab />}
          {value === 1 && <PersonalTab />}
          {value === 2 && <WalletTab />}
          {value === 3 && <SecurityTab />}
          {value === 4 && <LogoutTab />}
        </Grid>
      </Grid>
    </Container>
  );
};
