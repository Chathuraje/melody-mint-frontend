import { useAxiosPrivate } from "@/hooks/Axios/useAxiosPrivate";

interface MarketplaceResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_addresse: string;
}

type GetAllMarketplaceDataAPI = (
  chainId?: number
) => Promise<MarketplaceResponse[]>;

interface GetAllNFTDataAPIDataResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_address: string;
  collection_owner: string;
  nfts: {
    nft_id: string;
    owner_address: string;
  }[];
}

interface GetAllNFTDataRequest {
  chainId?: number;
  contract_address?: string;
}
type GetAllNFTDataAPIDataAPI = (
  data: GetAllNFTDataRequest
) => Promise<GetAllNFTDataAPIDataResponse>;

export const useMarketplaceAPI = () => {
  const { axiosPrivate } = useAxiosPrivate();

  const GetAllMarketplaceDataAPI: GetAllMarketplaceDataAPI = async (data) => {
    const chaindId = data;
    if (chaindId === undefined) {
      return [];
    }

    try {
      const response = await axiosPrivate.get<MarketplaceResponse[]>(
        `/marketplace/${chaindId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const GetAllNFTDataAPI: GetAllNFTDataAPIDataAPI = async (data) => {
    const { chainId, contract_address } = data;

    if (chainId === undefined || contract_address === undefined) {
      return {} as GetAllNFTDataAPIDataResponse;
    }

    try {
      const response = await axiosPrivate.get<GetAllNFTDataAPIDataResponse>(
        `/marketplace/nfts/${chainId}/${contract_address}`
      );
      return response.data;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return {
    GetAllMarketplaceDataAPI,
    GetAllNFTDataAPI,
  };
};
