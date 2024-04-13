import { useSignMessage } from "wagmi";
import axios from "@/utils/axios";

// Response from the request_challenge API
export type RequestChallengeResponse = {
  id: string;
  message: string;
};

// Response from the verify_challenge API
export type VerifyChallengeResponse = {
  id: string;
  token: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  first_name: string;
  last_name: string;
};

interface getRequestChallengeParams {
  address: `0x${string}`;
  chainId: number;
}

interface verifyChallengeParams {
  message: string;
  signature: string;
}

const getRequestChallenge = async (params: getRequestChallengeParams) => {
  const { address, chainId } = params;

  const challengeRequestBody = {
    wallet_address: address,
    chain_id: chainId,
  };

  try {
    const response = await axios.post(
      "/auth/request_challenge",
      JSON.stringify(challengeRequestBody)
    );

    if (response && response.data.message !== undefined) {
      const message = response.data.message;

      return message;
    }
  } catch (error) {
    console.log(error);
  }
};

const verifyChallenge = async (params: verifyChallengeParams) => {
  const { message, signature } = params;

  const verifyRequestBody = {
    message: message,
    signature: signature,
  };

  try {
    const verification = await axios.post(
      "/auth/verify_challenge",
      JSON.stringify(verifyRequestBody)
    );

    return verification;
  } catch (error) {
    console.log(error);
  }
};

export const useLoginAPI = () => {
  const { signMessageAsync } = useSignMessage();

  const loginAPI = async (params: getRequestChallengeParams) => {
    const { address, chainId } = params;

    const message = await getRequestChallenge({ address, chainId });
    if (message !== undefined) {
      const signature = await signMessageAsync({ message });
      const verification = await verifyChallenge({ message, signature });

      return verification;
    }
  };

  return { loginAPI };
};
