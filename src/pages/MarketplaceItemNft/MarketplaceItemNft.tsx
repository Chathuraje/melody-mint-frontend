import {
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useMarketplaceAPI } from "@/api/useMarketplaceAPI";
import { useCampaingWeb3 } from "@/api/useCampaingWeb3";
import { eth_value, wei_value } from "@/utils/styledVarialbes";

interface GetSingleNFTDataAPIDataResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_address: `0x${string}`;
  collection_owner: string;
  nft_id: string;
  owner_address: string;
  price: number;
}

export const MarketplaceItemNft = () => {
  const { collectionId, tokenId } = useParams();
  const { chainId, address } = useAccount();

  const { GetSingleNFTDataAPI } = useMarketplaceAPI();

  const { buyNFTWeb3, listForSaleWeb3, transferNFTWeb3 } = useCampaingWeb3();

  const [nftData, setNftData] = useState<GetSingleNFTDataAPIDataResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState<string>("");
  const [transferAddress, setTransferAddress] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await GetSingleNFTDataAPI({
        chainId,
        contract_address: collectionId,
        nft_id: Number(tokenId),
      });
      setNftData(data);
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);

  const NftImage = {
    backgroundImage: `url(${nftData?.collection_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  async function buyNFT() {
    if (
      !nftData ||
      nftData?.price === 0 ||
      nftData?.price === undefined ||
      nftData?.price === null
    ) {
      return;
    }

    const response = await buyNFTWeb3(
      nftData?.nft_id,
      BigInt(nftData?.price.toString()),
      collectionId as `0x${string}`
    );

    console.log(response);
  }

  async function listForSale() {
    if (!price || !nftData || !collectionId) {
      alert("Please enter a price");
      return;
    }

    const response = await listForSaleWeb3(
      Number(nftData?.nft_id) || 0,
      wei_value(parseFloat(nftData?.price.toString())),
      collectionId as `0x${string}`
    );

    console.log(response);
  }

  async function transferNFT() {
    if (!transferAddress || !nftData) {
      alert("Please enter a valid address");
      return;
    }

    const response = await transferNFTWeb3(
      nftData?.nft_id,
      transferAddress,
      collectionId as `0x${string}`
    );

    console.log(response);
  }

  return (
    <Container>
      {isLoading ? (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <CircularProgress />
        </Grid>
      ) : (
        <Grid display="flex" flexDirection="column" gap="25px">
          <Grid
            container
            direction="column"
            alignItems="stretch"
            justifyContent="center"
            width="100%"
            padding="25px 0px 0px 0px"
          >
            <Grid container justifyContent="center">
              <Grid display="flex" flexDirection="column" xs={4} gap="20px">
                <Grid
                  display="flex"
                  style={NftImage}
                  height="400px"
                  flexDirection="column"
                  alignItems="end"
                  justifyContent="end"
                  gap="20px"
                ></Grid>
              </Grid>
              <Grid
                xs={8}
                display="flex"
                flexDirection="column"
                gap="25px"
                padding="0px 20px 5px 20px"
              >
                <Grid
                  xs={8}
                  display="flex"
                  flexDirection="column"
                  gap="25px"
                  padding="0px 20px 5px 20px"
                >
                  <Grid display="flex" flexDirection="column">
                    <Typography variant="h6" fontSize="35px">
                      {nftData?.collection_name}
                    </Typography>
                    <Typography variant="h6" fontSize="15px">
                      Owner of NFT: {nftData?.owner_address}
                    </Typography>
                  </Grid>
                  <Grid display="flex" flexDirection="column" gap="5px">
                    <Grid display="flex" flexDirection="column">
                      <Typography
                        variant="subtitle1"
                        fontSize="15px"
                        color="#6D6D6D"
                      >
                        Current price
                      </Typography>
                      <Grid
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                        flexDirection="row"
                        gap="8px"
                      >
                        <Typography variant="h6" fontSize="25px">
                          <b>{eth_value(nftData?.price)} ETH</b>
                        </Typography>
                        <Typography variant="h6" fontSize="15px">
                          (
                          {nftData
                            ? (eth_value(nftData?.price) * 3072.57).toFixed(3)
                            : 0}
                          USD)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    display="flex"
                    flexDirection="column"
                    alignItems="left"
                    justifyContent="left"
                    gap="10px"
                  >
                    {address === nftData?.owner_address ? (
                      <>
                        <TextField
                          placeholder="Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        />
                        <Button
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={listForSale}
                        >
                          List for Sale
                        </Button>
                      </>
                    ) : (
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={buyNFT}
                      >
                        Buy now
                      </Button>
                    )}
                    {address === nftData?.owner_address ? (
                      <>
                        <TextField
                          placeholder="Transfer address"
                          value={transferAddress}
                          onChange={(e) => setTransferAddress(e.target.value)}
                        />
                        <Button
                          fullWidth
                          variant="outlined"
                          color="primary"
                          onClick={() => transferNFT()}
                        >
                          Transfer
                        </Button>
                      </>
                    ) : null}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            display="flex"
            flexDirection="column"
            gap="5px"
            padding="5px 20px 20px 20px"
            borderRadius="10px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.10)"
            border="1px solid #E0E0E0"
          >
            <Typography variant="h4" fontSize="25px">
              Description
            </Typography>
            <Typography variant="subtitle2" color="#6D6D6D">
              {nftData?.collection_description}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};
