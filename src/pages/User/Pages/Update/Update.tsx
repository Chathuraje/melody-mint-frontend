import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { ProfileTab } from "./components/ProfileTab";
import { PersonalTab } from "./components/PersonalTab";
import { IncomeTab } from "./components/IncomeTab";
import { WithdrawalTab } from "./components/WithdrawalTab";
import { WalletTab } from "./components/WalletTab";
import { SecurityTab } from "./components/SecurityTab";
import { LeftSliderbar } from "./components/LeftSliderbar";
import { useNavigate, useParams } from "react-router-dom";
import { useProfileAPI } from "@/hooks/API/useProfileAPI";
import { useProfile } from "../../hooks/useProfile";

export const Update = () => {
  const { activeTab, Userid } = useParams();
  const navigate = useNavigate();
  const [paramValue, setParamValue] = useState(
    activeTab ? parseInt(activeTab) - 1 : 0
  );

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setParamValue(newValue);
    navigate(`/user/${Userid}/update/${newValue + 1}`);
  };

  const { GetProfileAPI } = useProfileAPI();
  const { setProfileData } = useProfile();

  useEffect(() => {
    setParamValue(paramValue);
  }, [paramValue]);

  useEffect(() => {
    const controller = new AbortController();
    const getProfileData = async () => {
      const data = await GetProfileAPI(controller.signal);
      setProfileData(data);
    };

    getProfileData();

    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container>
        <LeftSliderbar value={paramValue} handleChange={handleChange} />
        <Grid
          xs={12}
          sm={9}
          style={{
            padding: "20px",
          }}
        >
          {paramValue === 0 && <ProfileTab />}
          {paramValue === 1 && <PersonalTab />}
          {paramValue === 2 && <IncomeTab />}
          {paramValue === 3 && <WithdrawalTab />}
          {paramValue === 4 && <WalletTab />}
          {paramValue === 5 && <SecurityTab />}
        </Grid>
      </Grid>
    </Container>
  );
};
