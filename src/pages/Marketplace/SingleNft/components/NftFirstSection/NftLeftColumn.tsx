import { Unstable_Grid2 as Grid, Typography } from "@mui/material";
import NftImagePlaceholder from "@/assets/marketplace/single-collection-image-palceholder.png";

export function NftLeftColumn() {
  const NftImage = {
    backgroundImage: `url(${NftImagePlaceholder})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <Grid
        display="flex"
        style={NftImage}
        height="400px"
        flexDirection="column"
        alignItems="end"
        justifyContent="end"
        gap="20px"
      ></Grid>

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in
          metus vulputate eu scelerisque. Ipsum nunc aliquet bibendum enim
          facilisis gravida neque. Turpis egestas pretium aenean pharetra magna
          ac placerat vestibulum. Sed velit dignissim sodales ut eu sem integer.
        </Typography>
      </Grid>
    </>
  );
}
