import { useContext } from "react";
import { CampaignContext } from "../providers/CampaignProvider";

export const useCampaign = () => {
  const campaign = useContext(CampaignContext);
  if (!campaign) {
    throw new Error("useCampaign must be used within an CampaignProvider");
  }
  return campaign;
};
