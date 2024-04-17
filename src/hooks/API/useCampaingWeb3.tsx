import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";
import { CampaignModel } from "@/models/Campaign";

export type CampaingDataModel = {
  name: string;
  short_description: string;
  end_date: string;
  description: string;
  image: string;
  creation_description: string;
  creation_hero: string;
  current_amount: number;
  disabled: boolean;
};

type GetCampaingWeb3Type = () => Promise<CampaignModel>;
type UpdateCampaingWeb3Type = (
  data: Partial<CampaingDataModel>
) => Promise<CampaignModel>;

export const useCampaingWeb3 = () => {
  const { axiosPrivate } = useAxiosPrivate();

  const GetCampaingWeb3: GetCampaingWeb3Type = async () => {
    try {
      //
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const UpdateCampaingWeb3: UpdateCampaingWeb3Type = async (data) => {
    try {
      //
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetCampaingWeb3, UpdateCampaingWeb3 };
};
