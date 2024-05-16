import {
  Box,
  Button,
  Container,
  Unstable_Grid2 as Grid,
  IconButton,
  InputAdornment,
  LinearProgress,
  TextField,
  Typography,
} from "@mui/material";
import { InvestorsTable } from "../components/CampaignInformation/InvestorsTable";
import { FundraiseUpdates } from "../components/CampaignInformation/FundraiseUpdates";
import { IconInformationBox } from "@/components/ui/IconInformationBox";
import TokenIcon from "@mui/icons-material/Token";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import { useEffect, useState } from "react";
import { useCampaignAPI } from "@/api/useCampaignAPI";
import { useAccount } from "wagmi";
import { useNavigate, useParams } from "react-router-dom";
import {
  eth_value,
  human_deadline,
  raised_percentage,
  wei_value,
} from "@/utils/styledVarialbes";
import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";
import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";
import { useCampaingWeb3 } from "@/api/useCampaingWeb3";

interface InvestmentList {
  id: string;
  address: string;
  amount: number;
}
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
  investment: InvestmentList[];
}

export const SingleFundraisersItem = () => {
  const EditCalendar = <EditCalendarIcon />;
  const EventBusy = <EventBusyIcon />;
  const Token = <TokenIcon />;
  const navigate = useNavigate();
  const { GetCampaingDataAPI } = useCampaignAPI();
  const { investToCampaignWeb3 } = useCampaingWeb3();

  const [campaingData, setCampaignData] = useState<CampaignsResponse>();
  const { chainId } = useAccount();

  const { FundraisersId } = useParams();
  const [investmentAmount, setInvestmentAmount] = useState("");

  useEffect(() => {
    if (!FundraisersId) {
      return;
    }
    console.log(FundraisersId);
    GetCampaingDataAPI({ chainId, FundraisersId }).then((data) => {
      setCampaignData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function investAmount(amount: string) {
    if (!FundraisersId) {
      return;
    }
    const response = investToCampaignWeb3(
      parseInt(FundraisersId),
      BigInt(wei_value(parseFloat(amount)))
    );
    console.log(response);
  }

  function viewCollection(address: string | undefined) {
    if (!address) {
      return;
    }
    navigate(`/marketplace/${address}`);
  }

  const FundraiseImage = {
    backgroundImage: `url(${campaingData?.collection_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "290px",
    width: "240px",
    borderRadius: "16px",
  };

  return (
    <Container>
      <Grid
        container
        sm={12}
        padding="50px 0 0 0" // Adjust this padding as needed
        display="flex"
        flexDirection="row"
        alignContent="left"
        justifyContent="space-between"
        gap="12px"
        margin="auto"
      >
        <Grid xs={8} display="flex" flexDirection="column" gap="35px">
          <Grid display="flex" flexDirection="row">
            <Grid xs={4} style={FundraiseImage}></Grid>
            <Grid
              xs={8}
              container
              display="flex"
              flexDirection="column"
              padding="0 25px 25px 25px"
              gap="10px"
            >
              <Typography variant="h4" color="black">
                {campaingData?.fundraiser_name}
              </Typography>
              <Typography variant="subtitle1" color="black" fontSize="15px">
                {campaingData?.collection_description}
              </Typography>
              <ArtistCard
                artistName="Aiden Markram"
                artistPlaceholder={ArtistPlaceholder}
              />
            </Grid>
          </Grid>
          <hr />
          <Grid display="flex" flexDirection="column" gap="15px">
            <Typography variant="h5" color="black" fontSize="28px">
              Fundraiser description
            </Typography>
            <Typography variant="subtitle1" color="black" fontSize="15px">
              {campaingData?.collection_description}
            </Typography>
            <hr />
          </Grid>
          <InvestorsTable investors={campaingData?.investment} />
          <FundraiseUpdates />
        </Grid>
        <Grid xs={3} display="flex" flexDirection="column" gap="35px">
          <Grid
            display="flex"
            flexDirection="column"
            borderRadius="16px"
            border="1px solid #E0E0E0"
            padding="25px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            height="auto"
            gap="70px"
          >
            <Grid display="flex" flexDirection="column" gap="15px">
              <Grid display="flex" flexDirection="column" gap="5px">
                <Typography variant="h4" color="black" fontSize="22px">
                  Eth {eth_value(campaingData?.current_amount)} Raised
                </Typography>
                <Box width="100%">
                  <LinearProgress
                    color="primary"
                    variant="determinate"
                    value={raised_percentage(
                      campaingData?.current_amount,
                      campaingData?.goal
                    )}
                  />
                </Box>
                <Typography variant="subtitle1" color="black" fontSize="14px">
                  Goal: {eth_value(campaingData?.goal)} ETH
                </Typography>
              </Grid>
              <hr />
              <Grid display="flex" flexDirection="column" gap="15px">
                <IconInformationBox
                  icon={EditCalendar}
                  title="Fund Created"
                  value={human_deadline(campaingData?.end_date)}
                />

                <IconInformationBox
                  icon={EventBusy}
                  title="Fund Deadline"
                  value={human_deadline(campaingData?.start_date)}
                />

                <IconInformationBox
                  icon={Token}
                  title="Token owners"
                  value="Over 1k tokens"
                />
              </Grid>
              <Grid
                display="flex"
                flexDirection="row"
                alignContent="center"
                justifyContent="center"
                width="100%"
              >
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    viewCollection(campaingData?.collection_address)
                  }
                >
                  View collection
                </Button>
              </Grid>
            </Grid>
            <Grid
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              width="100%"
              gap="15px"
            >
              <Typography
                variant="subtitle1"
                color="black"
                fontSize="14px"
                fontWeight="200"
              >
                Enter your investment to support the artist
              </Typography>
              <Grid
                container
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <TextField
                  type="number"
                  fullWidth
                  placeholder="Amount"
                  variant="outlined"
                  size="small"
                  onChange={(e) => setInvestmentAmount(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton aria-label="Ethereum">
                          <img
                            src={EthLogo}
                            alt="Icon eth badge"
                            width="25px"
                            height="25px"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => investAmount(investmentAmount)}
              >
                Invest
              </Button>
            </Grid>

            <Grid
              display="flex"
              flexDirection="column"
              alignContent="center"
              justifyContent="center"
              width="100%"
              gap="15px"
            >
              <Button fullWidth variant="contained" color="primary">
                Edit
              </Button>
              <Button fullWidth variant="contained" color="primary">
                Release Royalties
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
