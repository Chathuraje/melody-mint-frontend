type User = {
  id: string;
  wallet_address: `0x${string}`;
  chain_id: number;
  moralis_id: string;
  first_name: string;
  last_name: string;
  username: string;
  profile_hero: string;
  profile_image: string;
  artist_description: string;
  social_media: SocialMedia;
  email: string;
  contact_no: string;
  website: string;
  disabled: boolean;
  joined_date: string;
};

export type SocialMedia = {
  spotify?: string;
  instagram?: string;
  youtube?: string;
  x?: string;
  discord?: string;
};

export type UserModel = User;
