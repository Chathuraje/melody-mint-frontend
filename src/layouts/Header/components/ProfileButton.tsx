import { ProfileImage } from "@/components/ui/ProfileImage";
import { truncateAddress } from "@/utils/truncateAddress";
import { Badge, Grid, IconButton, Typography } from "@mui/material";
import { useAccount } from "wagmi";

interface ProfileButtonPrps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  open: boolean;
}

export const ProfileButton = (props: ProfileButtonPrps) => {
  const { handleClick, open } = props;

  const { address } = useAccount();
  const truncatedAddress = truncateAddress({ address });

  return (
    <IconButton
      disableRipple
      onClick={handleClick}
      aria-controls={open ? "account-menu" : undefined}
      aria-haspopup="true"
      aria-expanded={open ? "true" : undefined}
    >
      <Grid
        display="flex"
        justifyContent="right"
        bgcolor="#28282b"
        color="#f0f0f0"
        borderRadius="5px"
        padding="10px 20px"
        gap="15px"
        sx={{
          cursor: "pointer",
        }}
      >
        <Typography fontFamily="22px" fontWeight="400">
          {truncatedAddress}
        </Typography>
        <Badge color="success" overlap="circular" variant="dot">
          <ProfileImage dimentions="25px" />
        </Badge>
      </Grid>
    </IconButton>
  );
};
