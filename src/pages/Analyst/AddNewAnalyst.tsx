import React, { useState, ChangeEvent } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AudioIcon from "@/assets/analyst/audio-icon.svg";
import VideoIcon from "@/assets/analyst/video-icon.svg";
import { PopupIconBox } from "@/components/ui/PopupIconBox";
import { useAnalystAPI } from "@/api/useAnalystAPI";

export const AddNewAnalyst: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");
  const [musicTrackName, setMusicTrackName] = useState<string>("");
  const [artistName, setArtistName] = useState<string>("");
  const [selectedOption, setSelectedOption] = useState("Video");
  const [selectedPlatform, setSelectedPlatform] = useState<number | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { trainAPI } = useAnalystAPI();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFile(file);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleSubmit = async () => {
    // console.log("Music track name:", musicTrackName);
    // console.log("Artist name:", artistName);
    // console.log("Selected option:", selectedOption);
    // console.log("Selected platform:", selectedPlatform);
    // console.log("Uploaded file name:", fileName);

    // Add the API call here
    if (selectedOption === "Video") {
      // Call the video API
    }
    if (selectedOption === "Audio") {
      // Call the audio API
      if (file && musicTrackName) {
        try {
          const response = await trainAPI(file, musicTrackName);
          console.log("Train API response:", response);
        } catch (error) {
          console.error("Error during train API call:", error);
        }
      }
    }
  };

  return (
    <Grid display="flex" flexDirection="column" padding="70px" gap="30px">
      <Grid
        container
        xs={12}
        flexDirection="row"
        display="flex"
        alignItems="left"
        gap="25px"
        height="200px"
        width="50%"
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
      <Typography variant="subtitle1" color="black" fontSize="19px">
        Fill the required information about the music that you are going to
        trace.
      </Typography>
      <Grid
        container
        xs={12}
        flexDirection="row"
        display="flex"
        alignItems="left"
        gap="35px"
        height="200px"
        width="50%"
      >
        <TextField
          fullWidth
          label="Music track name"
          variant="outlined"
          value={musicTrackName}
          onChange={(e) => setMusicTrackName(e.target.value)}
          size="small"
        />
        <TextField
          fullWidth
          label="Artist Name"
          variant="outlined"
          value={artistName}
          onChange={(e) => setArtistName(e.target.value)}
          size="small"
        />
        <FormControl required sx={{ minWidth: "100%" }} size="small">
          <InputLabel id="track-platform">Platforms to Track</InputLabel>
          <Select
            labelId="track-platform"
            id="platforms"
            label="Platforms to Track"
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value as number)}
          >
            <MenuItem value={0}>Radio King</MenuItem>
          </Select>
        </FormControl>
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <input
            hidden
            title="Upload"
            type="file"
            onChange={handleFileChange}
          />
        </Button>
        {fileName && (
          <Typography
            variant="body1"
            color="black"
            textAlign="center"
            alignContent="center"
          >
            {fileName}
          </Typography>
        )}
      </Grid>
      <Grid container justifyContent="flex-end" width="50%">
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};
