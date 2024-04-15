import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProfileAPI } from "@/hooks/API/useProfileAPI";
import { useProfile } from "../../hooks/useProfile";
import { LeftSliderbar } from "./components/LeftSliderbar";
import {
  ProfileTab,
  PersonalTab,
  IncomeTab,
  WithdrawalTab,
  WalletTab,
  SecurityTab,
} from "./tabs";

export const Update = () => {
  const { activeTab, Userid } = useParams();
  const navigate = useNavigate();
  const [paramValue, setParamValue] = useState(
    activeTab ? parseInt(activeTab) - 1 : 0
  );
  const { GetProfileAPI } = useProfileAPI();
  const { setProfileData } = useProfile();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setParamValue(newValue);
    navigate(`/user/${Userid}/update/${newValue + 1}`);
  };

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
