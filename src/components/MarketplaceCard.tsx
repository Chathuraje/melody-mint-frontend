import { Box, Button, Grid, Typography } from "@mui/material";
import CollectionPlaceholder from "@/assets/marketplace/single-collection-image-palceholder.png";
import { useState } from "react";

interface MarketplaceCardProps {
  nft?: boolean;
  name: string;
  floor?: number;
  currentPrice?: number;
  lastPrice?: number;
  src?: string;
}

export const MarketplaceCard = (props: MarketplaceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Grid
      display="flex"
      height="280px"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
      position="relative"
      overflow="hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Grid
        sx={{
          height: "100%",
          width: "100%",
          position: "relative",
          transition: "transform 0.3s ease",
          overflow: "hidden",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        <Box
          component="img"
          src={props.src || CollectionPlaceholder}
          alt={props.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: isHovered ? "scale(1.1)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
        <Grid
          display="flex"
          flexDirection="column"
          justifyContent="flex-end"
          position="absolute"
          padding="15px"
          bottom="0"
          left="0"
          width="100%"
          gap="4px"
          bgcolor="rgba(255, 255, 255, 0.7)"
          sx={{
            transition: "transform 0.3s ease",
            pointerEvents: "none",
          }}
        >
          <Grid display="flex" flexDirection="row" gap="10px">
            <Typography fontSize="16px">{props.name}</Typography>
            {props.nft && (
              <Typography fontSize="16px" color="textSecondary">
                | Price: {props.currentPrice} ETH
              </Typography>
            )}
          </Grid>
          <Grid display="flex" width="100%" flexDirection="column" gap="15px">
            <Typography fontSize="14px" color="textSecondary">
              {props.nft
                ? `Last Price: ${props.lastPrice} eth`
                : `Floor: ${props.floor} eth`}
            </Typography>

            {props.nft && (
              <Button fullWidth variant="contained">
                Buy Now
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
