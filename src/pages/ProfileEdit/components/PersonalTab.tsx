// import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";

import { FormBox } from "@/components/FormBox";
import { Grid } from "@mui/material";
import { FormSection } from "./PersonalTab/FormSection";
import { GroupSection } from "./PersonalTab/GroupSection";
import { SocialSection } from "./PersonalTab/SocialSection";

export const PersonalTab = () => {
  return (
    <>
      <FormBox
        title="Personal Details"
        description="Check for item trait changes and items flagged as stolen before a
offer is accepted"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="left"
          gap="25px"
        >
          <GroupSection />
          <FormSection />
        </Grid>
      </FormBox>

      <FormBox
        title="Social Details"
        description="Check for item trait changes and items flagged as stolen before a
offer is accepted"
      >
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="left"
          gap="25px"
        >
          <SocialSection />
        </Grid>
      </FormBox>
    </>
  );
};
