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
    owner_address: string;
    nft_id: string;
    price: number;
  }[];
}

interface GetAllNFTDataRequest {
  chainId?: number;
  contract_address?: string;
}
type GetAllNFTDataAPIDataAPI = (
  data: GetAllNFTDataRequest
) => Promise<GetAllNFTDataAPIDataResponse>;

interface GetSingleNFTDataAPIDataResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_address: `0x${string}`;
  collection_owner: string;
  nft_id: string;
  owner_address: string;
  price: number;
}
interface GetSingleNFTDataRequest {
  chainId?: number;
  contract_address?: string;
  nft_id?: number;
}
type GetSingleNFTDataAPIDataAPI = (
  data: GetSingleNFTDataRequest
) => Promise<GetSingleNFTDataAPIDataResponse>;

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

  const GetSingleNFTDataAPI: GetSingleNFTDataAPIDataAPI = async (data) => {
    const { chainId, contract_address, nft_id } = data;

    if (chainId === undefined || contract_address === undefined) {
      return {} as GetSingleNFTDataAPIDataResponse;
    }

    try {
      const response = await axiosPrivate.get<GetSingleNFTDataAPIDataResponse>(
        `/marketplace/nft/${chainId}/${contract_address}/${nft_id}`
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
    GetSingleNFTDataAPI,
  };
};
