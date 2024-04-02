import { PopupIconBox } from "@/components/ui/PopupIconBox";
import { Grid, Typography } from "@mui/material";
import AudioIcon from "@/assets/analyst/audio-icon.svg";
import VideoIcon from "@/assets/analyst/video-icon.svg";
import { useState } from "react";

export const PWSelectMediaType = () => {
  const [selectedOption, setSelectedOption] = useState("Investor");

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <Grid display="flex" flexDirection="column" padding="70px" gap="30px">
      <Typography variant="subtitle1" color="black" fontSize="19px">
        Choose if you are a investor or a music artist. You can always change
        your profile to music artist, if you select investor
      </Typography>
      <Grid
        container
        xs={12}
        flexDirection="row"
        display="flex"
        alignItems="left"
        gap="25px"
        height="200px"
        width="100%"
      >
        <PopupIconBox
          image={AudioIcon}
          text="Video"
          isSelected={selectedOption === "Video"}
          onClick={() => handleOptionSelect("Video")}
        />
        <PopupIconBox
          image={VideoIcon}
          text="Audio"
          isSelected={selectedOption === "Audio"}
          onClick={() => handleOptionSelect("Audio")}
        />
      </Grid>
    </Grid>
  );
};
