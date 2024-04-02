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

export const PWUploadMedia: React.FC = () => {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <Grid display="flex" flexDirection="column" padding="70px" gap="30px">
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
        width="100%"
      >
        <TextField
          fullWidth
          label="Music track name"
          variant="outlined"
          value="JohnDoe"
          size="small"
        />

        <TextField
          fullWidth
          label="Artist Name"
          variant="outlined"
          value="JohnDoe"
          size="small"
        />

        <FormControl required sx={{ minWidth: "100%" }} size="small">
          <InputLabel id="track-platform">Platforms to Track</InputLabel>
          <Select
            labelId="track-platform"
            id="platforms"
            label="Platforms to Track"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
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
    </Grid>
  );
};
