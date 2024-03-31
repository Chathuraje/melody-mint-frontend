import { AllCollections } from "./AllCollections/AllCollections";
import { SingleCollection } from "./SingleCollection/SingleCollection";
import { SingleNft } from "./SingleNft/SingleNft";

export const Marketplace = () => {
  return <AllCollections />;
};

export const MarketplaceCollection = () => {
  return <SingleCollection />;
};

export const SingleToken = () => {
  return <SingleNft />;
};
