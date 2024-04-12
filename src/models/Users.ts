type User = {
  id: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_hero: URL;
  profile_image: URL;
  artist_description: string;
  social_media: SocialMedia;
  email: string;
  contact_no: string;
  website: string;
  disabled: boolean;
  joined_date: string;
};

type SocialMedia = {
  spotify?: string; // Spotify profile link
  instagram?: string; // Instagram profile link
  youtube?: string; // Youtube channel link
  x?: string; // Extra social media link
  discord?: string; // Discord username
};

export type UserModel = User & {
  wallet_address: `0x${string}`;
  chain_id: number;
};

export type UserUpdateModel = Partial<User>;

export type TokenResponse = {
  id: string;
  address: `0x${string}`;
  chainId: number;
  first_name: string;
  last_name: string;
};
