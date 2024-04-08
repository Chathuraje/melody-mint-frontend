export type ChallengeRequest = {
  id: string;
  message: string;
};

export type UserProfileToken = {
  id: string;
  token: string;
  address: string;
  chainId: number;
};

export type UserProfile = {
  id: string;
  address: string;
  chainId: number;
};
