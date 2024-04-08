import axios from "axios";
import { useSignMessage } from "wagmi";
import { handleError } from "@/utils/ErrorHandler";
import { ChallengeRequest, UserProfileToken } from "@/models/user";

const API_URL = import.meta.env.VITE_API_URL;

interface handleAuthParams {
  address: `0x${string}` | undefined;
  chainId: number;
}

export const LoginAPI = async (params: handleAuthParams) => {
  const { address, chainId } = params;

  const { signMessageAsync } = useSignMessage();

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
  } catch (error) {
    handleError(error);
  }
};
