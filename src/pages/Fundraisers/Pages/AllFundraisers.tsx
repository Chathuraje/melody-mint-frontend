import { Unstable_Grid2 as Grid, Container } from "@mui/material";
import { Pagination } from "@/components/ui/Pagination";
import { SubPageHeaders } from "@/components/SubPageHeaders";
import FundRaiserCard from "@/components/FundRaiserCard";
import { ToggleSwitch } from "@/components/ToggleSwitch";
import { SelectOptions } from "@/components/ui/SelectOptions";
import categories from "@/data/categories.json";

export const AllFundraisers = () => {
  const categoryNames = categories.map((category) => category.name);

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
        <Grid container direction="column" alignItems="center" gap="25px">
          <Grid container justifyContent="left">
            {[...Array(8)].map((_, index) => (
              <Grid key={index} xs={12} sm={6} md={3} padding={1}>
                <FundRaiserCard />
              </Grid>
            ))}
          </Grid>
          <Pagination />
        </Grid>
      </Grid>
    </Container>
  );
};
