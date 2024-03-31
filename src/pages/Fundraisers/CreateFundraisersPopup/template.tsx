import { PopupIconBox } from "@/components/ui/PopupIconBox";
import { Grid, Typography } from "@mui/material";
import InvestorIcon from "@/assets/fundraiser/icon-account-investor.svg";
import ArtistIcon from "@/assets/fundraiser/icon-account-artist.svg";

export const PWSelectUserType = () => {
  return (
    <Grid display="flex" flexDirection="column" padding="70px" gap="30px">
      <Typography variant="subtitle1" color="black" fontSize="19px">
        Choose if you are a investor or a music artist. You can always change
        your profile to music artist, if you select investor
      </Typography>
      <Grid
        container
        xs={12}
        flexDirection="row"
        display="flex"
        alignItems="left"
        gap="25px"
        height="200px"
        width="100%"
      >
        <PopupIconBox image={InvestorIcon} text="Investor" />
        <PopupIconBox image={ArtistIcon} text="Music Artist" />
      </Grid>
    </Grid>
  );
};
