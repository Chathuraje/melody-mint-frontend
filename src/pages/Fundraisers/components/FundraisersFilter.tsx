import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

export const FundraisersFilter = () => {
  return (
    <Grid
      display="flex"
      gap="35px"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Grid>
        <ToggleButtonGroup exclusive>
          <ToggleButton value="trending">
            <Typography variant="body1">Trending </Typography>
          </ToggleButton>
          <ToggleButton value="top">
            <Typography variant="body1">Top</Typography>
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid>
        <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
          <InputLabel id="music-genre-label">Music Genre</InputLabel>
          <Select labelId="music-genre" id="music-genre" label="Music Genre">
            <MenuItem value={0}>All</MenuItem>
            <MenuItem value={1}>Rock</MenuItem>
            <MenuItem value={2}>Dance</MenuItem>
            <MenuItem value={3}>Light</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};
