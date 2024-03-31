import { Popups } from "@/layouts/Global/Popups/Popups";
import { SelectUserType } from "./SelectUserType";
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
        title="Let’s Begin by choosing your role"
        subtitle="The registration process starts with selecting your role"
        screens={[
          <SelectUserType />,
          <SelectUserType />,
          <SelectUserType />,
          <SelectUserType />,
        ]}
        onSubmit={onCreateFundraisers}
      ></Popups>
    </>
  );
};
