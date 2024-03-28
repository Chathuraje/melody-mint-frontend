import { Button } from "@/components/ui";
import { Box } from "@mui/material";

import "./Cta.css";

const TextWrapper = () => {
  return (
    <Box
      alignItems="flex-start"
      display="flex"
      flexDirection="column"
      gap="22px"
      width="100%"
      padding="75px 0 75px 65px"
    >
      <h1 className="cta-title">Become an artist, fund your music</h1>
      <p className="cta-description">
        By starting a fundraiser, you can collect investments to fund your music
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
      </Box>
    </Box>
  );
};

export default TextWrapper;
