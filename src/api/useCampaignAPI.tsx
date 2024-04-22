import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";
import { CampaingOffChain } from "@/models/Campaign";

type StoreCampaignMetaDataAPIType = (
  data: CampaingOffChain
) => Promise<StoreCampaignMetaDataResponseType>;
type StoreCampaignMetaDataResponseType = {
  campaign_data: string;
  collection_data: string;
};

export const useCampaignAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

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

  return { StoreCampaignMetaDataAPI };
};
