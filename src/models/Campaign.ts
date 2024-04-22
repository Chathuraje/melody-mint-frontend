export type CampaignBlockchain = {
  fundraiser_name: string;
  goal: number;
  distribution_percentage: number;
  start_date: number;
  end_date: number;
  campaign_meta_data: string;

  collection_name: string;
  collection_meta_data: string;
};

export type CampaingOffChain = {
  description: string;
  image: FileList;
  short_description: string;

  collection_description: string;
  collection_image: FileList;
  collection_hero: FileList;
};

export type CampaignModel = CampaignBlockchain & CampaingOffChain;
