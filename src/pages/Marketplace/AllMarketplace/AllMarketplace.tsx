import { Container, Grid } from "@mui/material";
import { MarketplaceFilter } from "./MarketplaceFilter";
import { Pagination } from "@/components/ui/Pagination";
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

  const { chainId } = useAccount();
  const [marketplaceData, setMarketplaceData] =
    useState<MarketplaceResponse[]>();

  useEffect(() => {
    GetAllMarketplaceDataAPI(chainId).then((data) => {
      setMarketplaceData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Grid container display="flex" gap="22px" flexDirection="column">
        <Grid>
          <SubPageHeaders
            title="Melody Mint marketplace"
            subtitle="m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et do"
            filter={<MarketplaceFilter />}
          />
        </Grid>
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left">
            {marketplaceData?.map((marketplace, index) => (
              <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                <Link
                  to={`/marketplace/${marketplace?.collection_addresse}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MarketplaceCard
                    src={marketplace?.collection_image}
                    name={marketplace?.collection_name}
                    floor={14.34}
                  />
                </Link>
              </Grid>
            ))}
          </Grid>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
