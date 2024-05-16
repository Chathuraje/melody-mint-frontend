export type CampaignBlockchain = {
  _fundraiser_name: string;
  _goal: number;
  _distribution_percentage: number;
  _start_date: number;
  _end_date: number;
  _campaign_meta_data: string;

  _collection_name: string;
  _collection_symbol: string;
  _collection_meta_data: string;
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
