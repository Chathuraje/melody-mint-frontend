import { useState } from "react";
import axios from "axios";
import { useSignMessage } from "wagmi";

const API_URL = import.meta.env.VITE_API_URL;

interface handleAuthParams {
  address: `0x${string}` | undefined;
  chainId: number;
}

export function useAuth() {
  const [profileId, setProfileId] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const { signMessageAsync } = useSignMessage();

  async function handleAuth(params: handleAuthParams) {
    const { address, chainId } = params;

    if (!address || !chainId) {
      setError("Address or chain is missing.");
      return;
    }

    const challengeRequestBody = {
      address: address,
      chainId: chainId,
    };

    try {
      const response = await axios.post(
        `${API_URL}/api/v1/auth/request_challenge`,
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

      const verification = await axios.post(
        `${API_URL}/api/v1/auth/verify_challenge`,
        JSON.stringify(verifyRequestBody),
        {
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
        }
      );
      setProfileId(verification.data.id);
      setToken(verification.data.token);

      console.log(`${token} ${profileId}`);
    } catch (error) {
      console.error("Error fetching auth data:", error);
      setError("Error fetching auth data");
    }
  }

  return { profileId, error, handleAuth };
}
