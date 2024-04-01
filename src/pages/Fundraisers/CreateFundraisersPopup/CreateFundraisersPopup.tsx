import { Popups } from "@/layouts/Global/Popups/Popups";
import { PWFundraiserInformation } from "./PWFundraiserInformation";
import { useContext } from "react";
import { FundraiserContext } from "../context/FundraiserContext";

export const CreateFundraisersPopup = () => {
  const { popupState, setPopupState } = useContext(FundraiserContext)!;

  const onCreateFundraisers = () => {
    console.log("onCreateFundraisers");
  };

  return (
    <>
      <Popups
        open={popupState}
        onClose={() => setPopupState(false)}
        title="Tell us about your Idea"
        subtitle="This information helps us understand your idea"
        screens={[
          <PWFundraiserInformation />,
          <PWFundraiserInformation />,
          // <PWSelectUserType />,
          // <PWSelectUserType />,
          // <PWSelectUserType />,
        ]}
        onSubmit={onCreateFundraisers}
      ></Popups>
    </>
  );
};
