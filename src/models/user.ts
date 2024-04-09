export type ChallengeRequest = {
  id: string;
  message: string;
};

// return with verified token
export type UserProfileToken = {
  id: string;
  token: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  first_name: string;
  last_name: string;
};

// this stores inside storage
export type UserProfile = {
  id: string;
  address: `0x${string}`;
  chainId: number;
  first_name: string;
  last_name: string;
};

export type SocialMedia = {
  spotify?: string; // Spotify profile link
  instagram?: string; // Instagram profile link
  youtube?: string; // Youtube channel link
  x?: string; // Extra social media link
  discord?: string; // Discord username
};

export type UserModel = {
  first_name?: string; // First name
  last_name?: string; // Last name
  username?: string; // User's username
  profile_hero?: URL; // Profile hero image URL
  profile_image?: URL; // Profile image URL
  artist_description?: string; // Description of the user
  social_media?: SocialMedia; // Social media links of the user
  wallet_address: `0x${string}`; // Wallet address of the user
  chain_id: number; // Chain ID of the user
  moralis_id: string; // Moralis ID of the user
  email?: string; // Email address of the user
  contact_no?: string; // Contact number of the user
  website?: string; // Website URL of the user
  joined_date: string; // Date and time when the user joined
  id: string; // Assuming this is the MongoDB ObjectId
};
