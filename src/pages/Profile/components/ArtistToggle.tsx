import React, { useState } from "react";
import { Tabs, Tab, Unstable_Grid2 as Grid } from "@mui/material";
// import { FundraiserSection } from "@/layouts/Global/FundraiserSection/FundraiserSection";
// import { MarketpaceSection } from "@/layouts/Global/MarketplaceSection/MarketpaceSection";
import { FundraiseUpdateBox } from "@/components/FundraiseUpdateBox";
import FundRaiserCard from "@/components/FundRaiserCard";
import { MarketplaceCard } from "@/components/MarketplaceCard";

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
        <Grid container justifyContent="left">
          {[...Array(8)].map((_, index) => (
            <Grid key={index} xs={12} sm={6} md={3} padding={1}>
              <FundRaiserCard />
            </Grid>
          ))}
        </Grid>
      )}
      {selectedTab === 1 && (
        <Grid container justifyContent="left">
          {[...Array(8)].map((_, index) => (
            <Grid key={index} xs={12} sm={6} md={3} padding={1}>
              <FundRaiserCard />
            </Grid>
          ))}
        </Grid>
      )}
      {selectedTab === 2 && (
        <Grid container justifyContent="left">
          {[...Array(8)].map((_, index) => (
            <Grid key={index} xs={12} sm={6} md={3} padding={1}>
              <MarketplaceCard />
            </Grid>
          ))}
        </Grid>
      )}
      {selectedTab === 3 && (
        <Grid
          container
          display="flex"
          flexDirection="row"
          gap="15px"
          overflow="auto"
          maxHeight="700px"
        >
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
          <FundraiseUpdateBox
            title="Update 23/01/2023"
            description="Exciting news, everyone! I'm absolutely thrilled to share a significant update in our music fundraiser journey. Thanks to your incredible support and generosity, I've recently had the privilege of purchasing a stunning guitar from a local music shop. This isn't just any guitar; it's a symbol of our collective passion and dedication towards bringing our musical vision to life. Every strum, every chord played on this instrument will ec"
          />
        </Grid>
      )}
    </div>
  );
};
