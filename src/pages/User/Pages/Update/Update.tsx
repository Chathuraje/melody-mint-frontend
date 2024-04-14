import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProfileTab } from "./components/ProfileTab";
import { PersonalTab } from "./components/PersonalTab";
import { IncomeTab } from "./components/IncomeTab";
import { WithdrawalTab } from "./components/WithdrawalTab";
import { WalletTab } from "./components/WalletTab";
import { SecurityTab } from "./components/SecurityTab";
import { LeftSliderbar } from "./components/LeftSliderbar";
import { useParams } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";

export const Update = () => {
  const { activeTab } = useParams();
  const paramValue = activeTab ? parseInt(activeTab) : 0;

  const [value, setValue] = useState<number>(paramValue);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(paramValue);
  }, [paramValue]);

  return (
    <UserProvider>
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
    </UserProvider>
  );
};
