import { Container, Grid } from "@mui/material";
import { useState } from "react";
import { ProfileTab } from "./components/ProfileTab";
import { PersonalTab } from "./components/PersonalTab";
import { SecurityTab } from "./components/SecurityTab";
import { WalletTab } from "./components/WalletTab";
import { LeftSliderbar } from "./components/LeftSliderbar";
import { IncomeTab } from "./components/IncomeTab";
import { WithdrawalTab } from "./components/WithdrawalTab";

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
          {value === 2 && <IncomeTab />}
          {value === 3 && <WithdrawalTab />}
          {value === 4 && <WalletTab />}
          {value === 5 && <SecurityTab />}
        </Grid>
      </Grid>
    </Container>
  );
};
