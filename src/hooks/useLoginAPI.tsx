// AuthService.js
import axios from "axios";
import { handleError } from "@/utils/ErrorHandler";
import { ChallengeRequest, UserProfileToken } from "@/models/user";
import { useSignMessage } from "wagmi";

const API_URL = import.meta.env.VITE_API_URL;

interface handleAuthParams {
  address: `0x${string}`;
  chainId: number;
}

export const useLoginAPI = () => {
  const { signMessageAsync } = useSignMessage();

  const loginAPI = async (params: handleAuthParams) => {
    const { address, chainId } = params;

    const challengeRequestBody = {
      address: address,
      chainId: chainId,
    };

    try {
      const response = await axios.post<ChallengeRequest>(
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

        const verification = await axios.post<UserProfileToken>(
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
