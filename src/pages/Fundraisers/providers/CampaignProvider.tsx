import { CampaignModel } from "@/models/Campaign";
import { createContext, useState } from "react";

interface CampaignContextType {
  campaignData: CampaignModel | null;
  setCampaignData: React.Dispatch<React.SetStateAction<CampaignModel | null>>;
}

export const CampaignContext = createContext<CampaignContextType | undefined>(
  undefined
);

interface CampaignProviderPrams {
  children: React.ReactNode;
}

export const CampaignProvider = (params: CampaignProviderPrams) => {
  const { children } = params;

  const [campaignData, setCampaignData] = useState<CampaignModel | null>(null);

  const contextValue: CampaignContextType = {
    campaignData: campaignData,
    setCampaignData: setCampaignData,
  };

  return (
    <CampaignContext.Provider value={contextValue}>
      {children}
    </CampaignContext.Provider>
  );
};
