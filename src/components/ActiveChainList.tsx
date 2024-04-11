import { Badge, Grid, MenuItem } from "@mui/material";
import { ChainIcon } from "connectkit";
import { useAccount, useSwitchChain } from "wagmi";

export const ActiveChainList = () => {
  const { chains, switchChain } = useSwitchChain();
  const { chain } = useAccount();

  return (
    <>
      {chains.map((swchain) => (
        <MenuItem
          key={swchain.id}
          onClick={() => switchChain({ chainId: swchain.id })}
          sx={{
            borderRadius: "20px",
            // backgroundColor:
            //   swchain.id === chain?.id ? "#22c55e" : "transparent",
          }}
        >
          <Grid display="flex" flexDirection="row" gap="15px">
            {swchain.id === chain?.id ? (
              <Badge color="success" overlap="circular" variant="dot">
                <ChainIcon id={swchain.id} />
              </Badge>
            ) : (
              <ChainIcon id={swchain.id} />
            )}

            {swchain.name}
          </Grid>
        </MenuItem>
      ))}
    </>
  );
};
