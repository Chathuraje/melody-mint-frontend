import { axiosPublic } from "@/utils/axios";
import { useSignMessage } from "wagmi";

// Response from the request_challenge API
interface getRequestChallengeRequest {
  address: `0x${string}`;
  chainId: number;
}
interface RequestChallengeResponse {
  id: string;
  message: string;
}
type getRequestChallengeType = (
  params: getRequestChallengeRequest
) => Promise<RequestChallengeResponse>;

// Response from the verify_challenge API
interface verifyChallengeRequest {
  message: string;
  signature: string;
}
interface VerifyChallengeResponse {
  id: string;
  token: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  first_name: string;
  last_name: string;
}

type verifyChallengeType = (
  params: verifyChallengeRequest
) => Promise<VerifyChallengeResponse>;

type LoginAPIType = (
  params: getRequestChallengeRequest
) => Promise<VerifyChallengeResponse>;

const getRequestChallenge: getRequestChallengeType = async (params) => {
  const { address, chainId } = params;

  const challengeRequestBody = {
    wallet_address: address,
    chain_id: chainId,
  };

  try {
    const response = await axiosPublic.post<RequestChallengeResponse>(
      "/auth/request_challenge",
      JSON.stringify(challengeRequestBody)
    );
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

const verifyChallenge: verifyChallengeType = async (params) => {
  const { message, signature } = params;

  const verifyRequestBody = {
    message: message,
    signature: signature,
  };

  try {
    const response = await axiosPublic.post<VerifyChallengeResponse>(
      "/auth/verify_challenge",
      JSON.stringify(verifyRequestBody)
    );
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

export const useLoginAPI = () => {
  const { signMessageAsync } = useSignMessage();

  const loginAPI: LoginAPIType = async (params) => {
    const { address, chainId } = params;

    try {
      const { message } = await getRequestChallenge({ address, chainId });
      const signature = await signMessageAsync({ message });
      const verification = await verifyChallenge({ message, signature });
      return verification;
    } catch (error) {
      console.error("Error occurred during login:", error);
      throw error;
    }
  };

  return { loginAPI };
};
