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

interface handleAuthParams {
  address: `0x${string}`;
  chainId: number;
}

export const useLoginAPI = () => {
  const { signMessageAsync } = useSignMessage();

  const loginAPI = async (params: handleAuthParams) => {
    const { address, chainId } = params;

    const challengeRequestBody = {
      wallet_address: address,
      chain_id: chainId,
    };

    try {
      const response = await axios.post<RequestChallengeResponse>(
        "/auth/request_challenge",
        JSON.stringify(challengeRequestBody)
      );

      if (response) {
        const message = response.data.message;
        const signature = await signMessageAsync({ message });

        const verifyRequestBody = {
          message: message,
          signature: signature,
        };

        const verification = await axios.post<VerifyChallengeResponse>(
          "/auth/verify_challenge",
          JSON.stringify(verifyRequestBody)
        );

        return verification;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { loginAPI };
};
