import { CampaignModel } from "@/models/Campaign";

export type CampaingDataModel = {
  name: string;
  short_description: string;
  goal: number;
  distribution_percentage: number;
  start_date: string;
  end_date: string;
  description: string;
  image: FileList;
  creation_name: string;
  creation_description: string;
  creation_image: FileList;
  creation_hero: FileList;
  current_amount: number;
  // category: string;
};

type GetCampaingWeb3Type = () => Promise<CampaignModel>;
type CreateCampaingWeb3Type = (
  data: Partial<CampaingDataModel>
) => Promise<CampaignModel>;

export const useCampaingWeb3 = () => {
  const GetCampaingWeb3: GetCampaingWeb3Type = async () => {
    try {
      //
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const CreateCampaingWeb3: CreateCampaingWeb3Type = async (data) => {
    console.log(data);

    

    try {
      //
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { GetCampaingWeb3, CreateCampaingWeb3 };
};
