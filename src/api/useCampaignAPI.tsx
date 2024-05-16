import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";
import { useAxiosPublic } from "@/hooks/Axios/useAxiosPublic";
import { CampaingOffChain } from "@/models/Campaign";

type StoreCampaignMetaDataAPIType = (
  data: CampaingOffChain
) => Promise<StoreCampaignMetaDataResponseType>;
type StoreCampaignMetaDataResponseType = {
  campaign_data: string;
  collection_data: string;
};

interface InvestmentList {
  id: string;
  address: string;
  amount: number;
}
interface CampaignsResponse {
  fundraiser_name: string;
  goal: number;
  distribution_percentage: number;
  start_date: number;
  end_date: number;
  current_amount: number;
  disabled: boolean;
  created_date: number;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  owner: string;
  collection_address: string;
  investment: InvestmentList[];
}

type campaingRequest = {
  FundraisersId: string;
  chainId?: number;
};

type GetAllCampaingDataAPI = (chainId?: number) => Promise<CampaignsResponse[]>;
type GetCampaingDataAPIType = (
  data: campaingRequest
) => Promise<CampaignsResponse>;

export const useCampaignAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();
  const { axiosPublic } = useAxiosPublic();

  const StoreCampaignMetaDataAPI: StoreCampaignMetaDataAPIType = async (
    data
  ) => {
    try {
      const formData = new FormData();
      const campaign_data = {
        description: data.description,
        image: data.image,
        short_description: data.short_description,
      };

      const collection_data = {
        collection_description: data.collection_description,
        collection_image: data.collection_image,
        collection_hero: data.collection_hero,
      };

      formData.append("campaign_data", JSON.stringify(campaign_data));
      formData.append("collection_data", JSON.stringify(collection_data));

      if (data.collection_image && data.collection_image.length > 0) {
        formData.append("collection_image", data.collection_image[0]);
      }

      if (data.collection_hero && data.collection_hero.length > 0) {
        formData.append("collection_hero", data.collection_hero[0]);
      }

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const response =
        await axiosPrivate.post<StoreCampaignMetaDataResponseType>(
          "/campaign",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const GetAllCampaingDataAPI: GetAllCampaingDataAPI = async (data) => {
    const chaindId = data;
    if (chaindId === undefined) {
      return [];
    }

    try {
      const response = await axiosPublic.get<CampaignsResponse[]>(
        `/campaign/${chaindId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const GetCampaingDataAPI: GetCampaingDataAPIType = async (data) => {
    const { chainId, FundraisersId } = data;
    if (chainId === undefined) {
      throw new Error("chainId is undefined");
    }

    try {
      const response = await axiosPublic.get<CampaignsResponse>(
        `/campaign/${chainId}/${FundraisersId}`
      );

      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return {
    StoreCampaignMetaDataAPI,
    GetAllCampaingDataAPI,
    GetCampaingDataAPI,
  };
};
