import { Grid, MenuItem } from "@mui/material";
import { ChainIcon } from "connectkit";
import { useSwitchChain } from "wagmi";

export const SwitcherPopup = () => {
  const { chains, switchChain } = useSwitchChain();

  return (
    <Grid display="flex" flexDirection="column" gap="5px" padding="10px">
      {chains.map((schain) => (
        <MenuItem
          key={schain.id}
          onClick={() => switchChain({ chainId: schain.id })}
          sx={{
            padding: "10px",
          }}
        >
          <Grid display="flex" flexDirection="row" gap="15px">
            <ChainIcon id={schain.id} />
            {schain.name}
          </Grid>
        </MenuItem>
      ))}
    </Grid>
  );
};
