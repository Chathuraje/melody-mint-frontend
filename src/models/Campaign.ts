type Campaign = {
  id: string;
  fundraiser_name: string;
  short_description: string;
  goal: number;
  distribution_percentage: number;
  start_date: string;
  end_date: string;
  description: string;
  image: string;
  creation_name: string;
  creation_description: string;
  creation_image: string;
  creation_hero: string;
  creator: string;
  current_amount: number;
  // category: string;
  disabled: boolean;
  created_date: string;
};

export type CampaignModel = Campaign;
