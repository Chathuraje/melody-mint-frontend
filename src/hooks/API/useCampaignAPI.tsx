import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";
import { CampaingOffChain } from "@/models/Campaign";

type StoreCampaignMetaDataAPIType = (data: CampaingOffChain) => Promise<string>;

export const useCampaignAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

  const StoreCampaignMetaDataAPI: StoreCampaignMetaDataAPIType = async (
    data
  ) => {
    try {
      const formData = new FormData();
      formData.append("campaign_data", JSON.stringify(data));

      if (data.creation_image && data.creation_image.length > 0) {
        formData.append("creation_image", data.creation_image[0]);
      }

      if (data.creation_hero && data.creation_hero.length > 0) {
        formData.append("creation_hero", data.creation_hero[0]);
      }

      if (data.image && data.image.length > 0) {
        formData.append("image", data.image[0]);
      }

      const response = await axiosPrivate.post<string>("/campaign", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { StoreCampaignMetaDataAPI };
};
