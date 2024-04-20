export type CampaignBlockchain = {
  fundraiser_name: string;
  goal: number;
  distribution_percentage: number;
  start_date: number;
  end_date: number;
  // creation_name: string;
  // creation_description: string;
};

export type CampaingOffChain = {
  description: string;
  image: FileList;
  creation_image: FileList;
  creation_hero: FileList;
  short_description: string;
};

export type CampaignModel = CampaignBlockchain & CampaingOffChain;
