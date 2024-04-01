import React, { useState } from "react";
import { Tabs, Tab, Unstable_Grid2 as Grid } from "@mui/material";
import { FundraiserSection } from "@/layouts/Global/FundraiserSection/FundraiserSection";
import { MarketpaceSection } from "@/layouts/Global/MarketplaceSection/MarketpaceSection";

export const ArtistToggle = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="Artist Toggle"
        sx={{ borderBottom: 1, borderColor: "divider", paddingBottom: "25px" }}
      >
        <Tab label="My Fundraiser Campaigns" sx={{ textTransform: "none" }} />
        <Tab
          label="Invested Fundraiser Campaign"
          sx={{ textTransform: "none" }}
        />
        <Tab label="Own Tokens" sx={{ textTransform: "none" }} />
        <Tab label="Activities" sx={{ textTransform: "none" }} />
      </Tabs>

      {selectedTab === 0 && (
        <Grid>
          <FundraiserSection amount={15} />
        </Grid>
      )}
      {selectedTab === 1 && (
        <Grid>
          <FundraiserSection amount={5} />
        </Grid>
      )}
      {selectedTab === 2 && (
        <Grid>
          <MarketpaceSection amount={5} />
        </Grid>
      )}
      {selectedTab === 3 && <Grid>Content for Activities</Grid>}
    </div>
  );
};
