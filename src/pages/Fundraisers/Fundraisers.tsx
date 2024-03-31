import { AllFundraisers } from "./AllFundraisers/AllFundraisers";
import { CreateFundraisersPopup } from "./CreateFundraisersPopup/CreateFundraisersPopup";
import { FundraiserProvider } from "./context/FundraiserContext";

export const Fundraisers = () => {
  return (
    <FundraiserProvider>
      <AllFundraisers />
      <CreateFundraisersPopup />
    </FundraiserProvider>
  );
};
