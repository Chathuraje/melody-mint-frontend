// AuthService.js
import axios from "axios";
import { handleError } from "@/utils/Errors/ErrorHandler";
import { useSignMessage } from "wagmi";

const API_URL = import.meta.env.VITE_API_URL;

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
        `${API_URL}/auth/request_challenge`,
        JSON.stringify(challengeRequestBody),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );

      if (response) {
        const message = response.data.message;
        const signature = await signMessageAsync({ message });

        const verifyRequestBody = {
          message: message,
          signature: signature,
        };

        const verification = await axios.post<VerifyChallengeResponse>(
          `${API_URL}/auth/verify_challenge`,
          JSON.stringify(verifyRequestBody),
          {
            headers: {
              "Content-Type": "application/json",
              accept: "application/json",
            },
          }
        );

        return verification;
      }
    } catch (error) {
      handleError(error);
    }
  };

  return { loginAPI };
};
