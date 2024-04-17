export { SingleFundraisersItem } from "./Pages/SingleFundraisersItem";
import { CampaignProvider } from "./providers/CampaignProvider";
export { AllFundraisers } from "./Pages/AllFundraisers";
import { CreateFundraisers } from "./Pages/CreateFundraisers";
export { UpdateFundraisers } from "./Pages/UpdateFundraisers";

export const Create = () => {
  return (
    <CampaignProvider>
      <CreateFundraisers />
    </CampaignProvider>
  );
};
