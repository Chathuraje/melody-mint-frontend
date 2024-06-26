import { useWriteContract } from "wagmi";
import abi from "./abi.json";
import abi_contract from "./collection_abi.json";
import { WriteContractReturnType } from "viem";

const MELODY_MINT_CONTRACT_ADDRESS = import.meta.env
  .VITE_MELODY_MINT_CONTRACT_ADDRESS;

interface web3WriteParams {
  function_name: string;
  args: (string | number | boolean)[];
}

type web3WriteResponse = (
  aprams: web3WriteParams
) => Promise<WriteContractReturnType>;

interface web3WritePaybleParams {
  function_name: string;
  args: (string | number | boolean)[];
  value: bigint;
}

type web3WritePaybleResponse = (
  aprams: web3WritePaybleParams
) => Promise<WriteContractReturnType>;

interface web3WriteContractParams {
  function_name: string;
  args: (string | number | boolean)[];
  contract_address: `0x${string}`;
}

type web3WriteContractResponse = (
  aprams: web3WriteContractParams
) => Promise<WriteContractReturnType>;

interface web3WriteContractPaybleParams {
  function_name: string;
  args: (string | number | boolean)[];
  contract_address: `0x${string}`;
  value: bigint;
}

type web3WriteContractPaybleResponse = (
  aprams: web3WriteContractPaybleParams
) => Promise<WriteContractReturnType>;

export const useMelodyMintContract = () => {
  const { writeContractAsync } = useWriteContract();

  const web3Write: web3WriteResponse = async (params) => {
    const { function_name, args } = params;

    try {
      const response = await writeContractAsync({
        abi,
        address: MELODY_MINT_CONTRACT_ADDRESS,
        functionName: function_name,
        args: [...args],
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const web3WritePayble: web3WritePaybleResponse = async (params) => {
    const { function_name, args, value } = params;

    try {
      const response = await writeContractAsync({
        abi,
        address: MELODY_MINT_CONTRACT_ADDRESS,
        functionName: function_name,
        args: [...args],
        value: value,
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const web3WriteContract: web3WriteContractResponse = async (params) => {
    const { function_name, args, contract_address } = params;

    try {
      const response = await writeContractAsync({
        abi: abi_contract,
        address: contract_address,
        functionName: function_name,
        args: [...args],
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  const web3WriteContractPayble: web3WriteContractPaybleResponse = async (
    params
  ) => {
    const { function_name, args, contract_address, value } = params;

    try {
      const response = await writeContractAsync({
        abi: abi_contract,
        address: contract_address,
        functionName: function_name,
        args: [...args],
        value: value,
      });
      return response;
    } catch (error) {
      console.error("Error occurred:", error);
      throw error;
    }
  };

  return {
    web3Write,
    web3WritePayble,
    web3WriteContract,
    web3WriteContractPayble,
  };
};
