import { WriteContractReturnType } from "viem";
import { useMelodyMintContract } from "../hooks/Web3/useMelodyMintContract";

interface RegisterUserWeb3Params {
  user_hash: string;
}

type RegisterUserWeb3Type = (
  data: RegisterUserWeb3Params
) => Promise<WriteContractReturnType>;

export const useRegisterUserWeb3 = () => {
  const { web3Write } = useMelodyMintContract();

  const registerUserWeb3: RegisterUserWeb3Type = async (data) => {
    const args: string[] = [data.user_hash];

    try {
      const response = await web3Write({
        function_name: "registerUser",
        args: args,
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return { registerUserWeb3 };
};
