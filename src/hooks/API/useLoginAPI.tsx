import { useSignMessage } from "wagmi";
import { useAxiosPublic } from "../Axios/useAxiosPublic";

// Response from the request_challenge API
interface getRequestChallengeRequest {
  address: `0x${string}`;
  chainId: number;
  axiosPublic: ReturnType<typeof useAxiosPublic>["axiosPublic"];
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
  axiosPublic: ReturnType<typeof useAxiosPublic>["axiosPublic"];
}
interface VerifyChallengeResponse {
  id: string;
  access_token: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  first_name: string;
  last_name: string;
  moralis_id: string;
}

type verifyChallengeType = (
  params: verifyChallengeRequest
) => Promise<VerifyChallengeResponse>;

interface LoginAPIParams {
  address: `0x${string}`;
  chainId: number;
}
type LoginAPIType = (
  params: LoginAPIParams
) => Promise<VerifyChallengeResponse>;

const getRequestChallenge: getRequestChallengeType = async (params) => {
  const { address, chainId, axiosPublic } = params;

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
  const { message, signature, axiosPublic } = params;

  const verifyRequestBody = {
    message: message,
    signature: signature,
  };

  try {
    const response = await axiosPublic.post<VerifyChallengeResponse>(
      "/auth/verify_challenge",
      JSON.stringify(verifyRequestBody),
      {
        withCredentials: true,
      }
    );
    console.log(verifyRequestBody);
    return response.data;
  } catch (error) {
    console.error("Error occurred:", error);
    throw error;
  }
};

export const useLoginAPI = () => {
  const { signMessageAsync } = useSignMessage();
  const { axiosPublic } = useAxiosPublic();

  const loginAPI: LoginAPIType = async (params) => {
    const { address, chainId } = params;

    try {
      const { message } = await getRequestChallenge({
        address,
        chainId,
        axiosPublic,
      });
      const signature = await signMessageAsync({ message });
      const verification = await verifyChallenge({
        message,
        signature,
        axiosPublic,
      });
      return verification;
    } catch (error) {
      console.error("Error occurred during login:", error);
      throw error;
    }
  };

  return { loginAPI };
};
