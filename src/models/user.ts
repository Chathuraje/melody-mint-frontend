export type ChallengeRequest = {
  id: string;
  message: string;
};

export type UserProfileToken = {
  id: string;
  token: string;
  wallet_address: string;
  chain_id: number;
};

export type UserProfile = {
  id: string;
  address: string;
  chainId: number;
};
