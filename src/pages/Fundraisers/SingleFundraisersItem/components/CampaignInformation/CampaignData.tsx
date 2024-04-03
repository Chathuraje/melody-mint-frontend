import { ArtistCard } from "@/components/ui/ArtistCard";
import ArtistPlaceholder from "@/assets/fundraiser/artist-placehodler.svg";
import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import FundraisePlaceholder from "@/assets/fundraiser/fundraise-placeholder.webp";

export const CampaignData = () => {
  const FundraiseImage = {
    backgroundImage: `url(${FundraisePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "280px",
  };

  return (
    <>
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
          <Typography variant="subtitle1" color="black" fontSize="14px">
            Share fundraiser
          </Typography>
          <Typography variant="h4" color="black">
            Don’t forget me
          </Typography>
          <Typography variant="subtitle1" color="black" fontSize="15px">
            Help me launch my first single audio track album. Help me launch my
            first single audio track album. Help me launch my first single audio
            track album. Help me launch my first single audio track album. Help
            me launch my first single audio track album. Help me
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
          Hello everyone! I'm thrilled to announce my latest endeavor: creating
          an incredible music track that will leave you tapping your feet and
          singing along. As a solo artist, I'm pouring my heart and soul into
          this project, and I need your help to make it happen. By supporting my
          GoFundMe campaign, you'll be directly contributing to studio time,
          production costs, and everything else needed to bring this track to
          life. Your generosity will not only help me achieve my dreams but also
          bring joy to music lovers everywhere. Let's come together and make
          magic happen - one note at a time!
        </Typography>
        <hr />
      </Grid>
    </>
  );
};
