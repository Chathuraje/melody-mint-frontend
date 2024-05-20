import { CircularProgress, Container, Grid } from "@mui/material";
import { MarketplaceFilter } from "./MarketplaceFilter";
// import { Pagination } from "@/components/ui/Pagination";
import { SubPageHeaders } from "@/components/SubPageHeaders";
import { MarketplaceCard } from "@/components/MarketplaceCard";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { useMarketplaceAPI } from "@/api/useMarketplaceAPI";
import { Link } from "react-router-dom";

interface MarketplaceResponse {
  collection_name: string;
  collection_symbol: string;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  collection_addresse: string;
}

export const AllMarketplace = () => {
  const { GetAllMarketplaceDataAPI } = useMarketplaceAPI();
  const [isLoading, setIsLoading] = useState(false);

  const { chainId } = useAccount();
  const [marketplaceData, setMarketplaceData] =
    useState<MarketplaceResponse[]>();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await GetAllMarketplaceDataAPI(chainId);
      setMarketplaceData(data);
      setIsLoading(false);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId]);

  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Melody Mint marketplace"
            subtitle="Discover the latest NFTs on Melody Mint."
            filter={<MarketplaceFilter />}
          />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left">
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
              marketplaceData?.map((marketplace, index) => (
                <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                  <Link
                    to={`/marketplace/${marketplace?.collection_addresse}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <MarketplaceCard
                      src={marketplace?.collection_image}
                      name={marketplace?.collection_name}
                      // floor={marketplace?.collection_symbol}
                      symbol={marketplace?.collection_symbol}
                      collection_addresse={marketplace?.collection_addresse}
                    />
                  </Link>
                </Grid>
              ))
            )}
          </Grid>
          {/* <Pagination /> */}
        </Grid>
      </Grid>
    </Container>
  );
};
