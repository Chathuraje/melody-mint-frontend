import { IconButton, InputAdornment, TextField } from "@mui/material";
import EthLogo from "@/assets/fundraiser/ethereum-eth-logo.svg";

export const InvestTextBox = () => {
  return (
    <TextField
      type="number"
      fullWidth
      placeholder="Amount"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Ethereum">
              <img
                src={EthLogo}
                alt="Icon eth badge"
                width="25px"
                height="25px"
              />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};
