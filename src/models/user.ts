export type ChallengeRequest = {
  id: string;
  message: string;
};

export type UserProfileToken = {
  id: string;
  token: string;
  wallet_address: string;
  chain_id: number;
  first_name: string;
  last_name: string;
};

export type UserProfile = {
  id: string;
  address: string;
  chainId: number;
  first_name: string;
  last_name: string;
};
