import { ExpandMore } from "@mui/icons-material";
import { Grid, IconButton, Typography } from "@mui/material";
import { ChainIcon } from "connectkit";
import { useAccount, useBalance } from "wagmi";

interface WalletDetailsPrps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export const WalletDetails = (props: WalletDetailsPrps) => {
  const { handleClick, open } = props;

  const { address, chain } = useAccount();
  const { data: { symbol = "", value = 0, decimals = 1 } = {} } = useBalance({
    address,
  });
  const readableAmount = Number(value) / 10 ** Number(decimals);

  return (
    <>
      <IconButton
        disableRipple
        onClick={handleClick}
        aria-controls={open ? "chain-list" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Grid
          display="flex"
          justifyContent="right"
          bgcolor="#f5f5f5"
          color="#28282b"
          borderRadius="5px"
          padding="8px 20px"
          gap="8px"
          sx={{
            cursor: "pointer",
          }}
        >
          <Grid
            display="flex"
            justifyContent="right"
            flexDirection="row"
            bgcolor="#2B2B2B"
            padding="1px 5px"
            borderRadius="15px"
            color="white"
          >
            <ChainIcon id={chain?.id} /> <ExpandMore />
          </Grid>
          <Typography fontFamily="22px" fontWeight="600">
            {readableAmount.toFixed(2)} {symbol}
          </Typography>
        </Grid>
      </IconButton>
    </>
  );
};
