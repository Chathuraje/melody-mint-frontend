import { Container, Unstable_Grid2 as Grid, Typography } from "@mui/material";
import { FilterSection } from "./components/FilterSection";
import { Pagination } from "@/components/ui/Pagination";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Link, useParams } from "react-router-dom";
import { useMarketplaceAPI } from "@/api/useMarketplaceAPI";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { MarketplaceStatics } from "./components/Hero/MarketplaceStatics";

interface GetAllNFTDataAPIDataResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_address: string;
  collection_owner: string;
  nfts: {
    nft_id: string;
    owner_address: string;
  }[];
}

export const MarketplaceItem = () => {
  const { collectionId } = useParams();
  const { GetAllNFTDataAPI } = useMarketplaceAPI();

  const { chainId } = useAccount();

  const [nftData, setNftData] = useState<GetAllNFTDataAPIDataResponse>();

  useEffect(() => {
    GetAllNFTDataAPI({ chainId, contract_address: collectionId }).then(
      (data) => {
        setNftData(data);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const CollectionHero = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.9)), url(${nftData?.collection_hero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const CollectionImage = {
    backgroundImage: `url(${nftData?.collection_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Grid display="flex" gap="22px" flexDirection="column">
      <Grid
        display="flex"
        style={CollectionHero}
        height="400px"
        padding="10px"
        flexDirection="column"
        alignItems="end"
        justifyContent="end"
      >
        <Container>
          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            padding="20px"
          >
            <Grid display="flex" flexDirection="column">
              <Grid
                display="flex"
                style={CollectionImage}
                width="160px"
                height="160px"
                padding="10px"
                flexDirection="column"
                alignItems="flex-end"
              ></Grid>
              <Typography
                variant="h4"
                color="white"
                fontSize="28px"
                font-weight="600"
              >
                {nftData?.collection_name}
              </Typography>
              <Typography variant="subtitle2" color="white" fontSize="18px">
                {nftData?.collection_owner}
              </Typography>
            </Grid>
            <MarketplaceStatics />
          </Grid>

          <Grid></Grid>
        </Container>
      </Grid>

      <Container>
        <Grid container display="flex" flexDirection="column" gap="20px">
          <Grid display="flex" flexDirection="column" gap="20px">
            <Typography>{nftData?.collection_description}</Typography>
            <Grid
              display="flex"
              flexDirection="row"
              gap="20px"
              paddingBottom="10px"
            >
              <Grid>
                <b>Items</b>: {nftData?.nfts.length}
              </Grid>
              <Grid>
                <b>Created</b>: 20 Jan 23
              </Grid>
              <Grid>
                <b>Distribution</b>: 2%
              </Grid>
            </Grid>
            <hr />
          </Grid>
          <FilterSection />
          <Grid container display="flex" gap="52px" flexDirection="column">
            <Grid container padding="0px" margin="0px" spacing={2}>
              {nftData?.nfts.map((nft, index) => (
                <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                  <Link
                    to={`/marketplace/${collectionId}/${index}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <MarketplaceCard
                      nft
                      name={nft.nft_id}
                      currentPrice={1500}
                      lastPrice={1000}
                    />
                  </Link>
                </Grid>
              ))}
            </Grid>
            <Pagination />
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
