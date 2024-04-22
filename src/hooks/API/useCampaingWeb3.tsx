import { CampaignBlockchain } from "@/models/Campaign";
import { useMelodyMintContract } from "../Web3/useMelodyMintContract";
import { WriteContractReturnType } from "viem";

// type GetCampaingWeb3Type = () => Promise<WriteContractReturnType>;
type CreateCampaingWeb3Type = (
  data: CampaignBlockchain
) => Promise<WriteContractReturnType>;

//TODO: Add Loading Screen until Transaction is completed
export const useCampaingWeb3 = () => {
  const { web3Write } = useMelodyMintContract();

  const CreateCampaingWeb3: CreateCampaingWeb3Type = async (data) => {
    const args: (string | number | boolean)[] = Object.values(data);
    console.log(args);
    try {
      const response = await web3Write({
        function_name: "createCampaign",
        args: args,
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { CreateCampaingWeb3 };
};
