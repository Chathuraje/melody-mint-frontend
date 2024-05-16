import { Card } from "@/components/ui/Card";
import {
  Box,
  Unstable_Grid2 as Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";
import {
  eth_value,
  human_deadline,
  raised_percentage,
} from "@/utils/styledVarialbes";

interface FundRaiserCardProps {
  fundraiser_name: string;
  goal: number;
  distribution_percentage?: number;
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
}

const FundRaiserCard = ({ data }: { data: FundRaiserCardProps }) => {
  const {
    fundraiser_name,
    goal,
    distribution_percentage,
    // start_date,
    end_date,
    current_amount,
    // disabled,
    // created_date,
    // collection_description,
    collection_image,
    // collection_hero,
    // owner,
    // collection_address,
  } = data;

  const FundRaiserItem = {
    backgroundImage: `url(${collection_image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <Card>
      <Grid
        display="flex"
        style={FundRaiserItem}
        height="275px"
        flexDirection="column"
        alignItems="flex-end"
        padding="10px"
      >
        <Box
          padding="8px 12px 8px 12px"
          bgcolor="secondary.light"
          borderRadius="16px"
        >
          {distribution_percentage}% distribution
        </Box>
      </Grid>
      <Grid
        gap="16px"
        display="flex"
        flexDirection="column"
        padding="15px 15px 15px 15px"
      >
        <Grid display="flex" flexDirection="column" gap="5px" padding="0">
          <Typography variant="h5">{fundraiser_name}</Typography>
          <Typography variant="subtitle1" color="#6D6D6D" fontSize="14px">
            <b>Deadline</b>: {human_deadline(end_date)}
          </Typography>
        </Grid>

        <ArtistCard artistName="name" artistPlaceholder={ArtistPlaceholder} />

        <Box width="100%">
          <LinearProgress
            color="primary"
            variant="determinate"
            value={raised_percentage(current_amount, goal)}
          />
        </Box>

        <Typography variant="subtitle2" color="#6D6D6D">
          <b>
            Eth {eth_value(current_amount)} raised of Eth {eth_value(goal)}
          </b>
        </Typography>
      </Grid>
    </Card>
  );
};

export default FundRaiserCard;
