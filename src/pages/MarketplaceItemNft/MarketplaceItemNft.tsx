import { Container, Grid } from "@mui/material";
import { NftSecondSection } from "./components/NftSecondSection";
import { NftThridSection } from "./components/NftThridSection";
import { NftLeftColumn } from "./components/NftFirstSection/NftLeftColumn";
import { NftRightColumn } from "./components/NftFirstSection/NftRightColumn";

export const MarketplaceItemNft = () => {
  return (
    <Container>
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
            <NftLeftColumn />
          </Grid>
          <Grid
            xs={8}
            display="flex"
            flexDirection="column"
            gap="25px"
            padding="0px 20px 5px 20px"
          >
            <NftRightColumn />
          </Grid>
        </Grid>
        <NftSecondSection />
        <NftThridSection />
      </Grid>
    </Container>
  );
};
