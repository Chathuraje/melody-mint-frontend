import { CampaignBlockchain } from "@/models/Campaign";
import { useMelodyMintContract } from "../hooks/Web3/useMelodyMintContract";
import { WriteContractReturnType } from "viem";

// type GetCampaingWeb3Type = () => Promise<WriteContractReturnType>;
type CreateCampaingWeb3Type = (
  data: CampaignBlockchain
) => Promise<WriteContractReturnType>;

type investToCampaignWeb3Type = (
  campaignId: number,
  amountToSend: bigint
) => Promise<WriteContractReturnType>;

//TODO: Add Loading Screen until Transaction is completed
export const useCampaingWeb3 = () => {
  const { web3Write, web3WritePayble } = useMelodyMintContract();

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

  const investToCampaignWeb3: investToCampaignWeb3Type = async (
    campaignId,
    amountToSend
  ) => {
    const args: (string | number | boolean)[] = [campaignId];
    console.log(args);
    console.log(amountToSend);
    try {
      const response = await web3WritePayble({
        function_name: "investToCampaign",
        args: args,
        value: amountToSend,
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { CreateCampaingWeb3, investToCampaignWeb3 };
};
