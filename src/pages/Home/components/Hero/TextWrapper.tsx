import { Button } from "@/components/ui";
import { Box } from "@mui/material";

const TextWrapper = () => {
  return (
    <Box
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
      gap="42px"
      width="100%"
    >
      <h1 className="hero-title">Invest & Earn with Music</h1>
      <p className="hero-description">
        Invest in Funds created by Music artist and earn royalties
      </p>
      <Box
        alignItems="center"
        display="inline-flex"
        flex="0 0 auto"
        gap="22px"
        justifyContent="center"
        position="relative"
      >
        <Button text="Start for free" typeofButtons="secondary" />
        <Button text="Join as an artist" typeofButtons="tertiary" />
      </Box>
    </Box>
  );
};

export default TextWrapper;
