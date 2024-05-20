import {
  Unstable_Grid2 as Grid,
  Container,
  CircularProgress,
} from "@mui/material";
import { SubPageHeaders } from "@/components/SubPageHeaders";
import FundRaiserCard from "@/components/FundRaiserCard";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import { SelectOptions } from "@/components/ui/SelectOptions";
import categories from "@/data/categories.json";
import { useEffect, useState } from "react";
import { useCampaignAPI } from "@/api/useCampaignAPI";
import { useAccount } from "wagmi";
import { Link } from "react-router-dom";

interface CampaignsResponse {
  fundraiser_name: string;
  goal: number;
  distribution_percentage: number;
  start_date: number;
  end_date: number;
  current_amount: number;
  disabled: boolean;
  created_date: number;
  collection_description: string;
  collection_image: string;
  collection_hero: string;
  owner: string;
  collection_address: string;
  owner_name: string;
}

export const AllFundraisers = () => {
  const categoryNames = categories.map((category) => category.name);
  const { GetAllCampaingDataAPI } = useCampaignAPI();

  const [campaingData, setCampaignData] = useState<CampaignsResponse[]>();
  const { chainId } = useAccount();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await GetAllCampaingDataAPI(chainId);
      setCampaignData(data);
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
            title="Explore Fundraisers"
            subtitle="Invest in Funds created by Music artist and earn royalties"
            filter={
              <Grid
                display="flex"
                gap="35px"
                flexDirection="row"
                justifyContent="space-between"
                alignContent="center"
              >
                <ToggleSwitch values={["Trending", "Top"]} />

                <SelectOptions
                  label="Categories"
                  items={["All", ...categoryNames]}
                />
              </Grid>
            }
          />
        </Grid>
        <Grid container direction="column" alignItems="left" gap="25px">
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
              campaingData?.map((campaign, index) => (
                <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                  <Link
                    to={`/fundraisers/${index}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <FundRaiserCard data={campaign} />
                  </Link>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
