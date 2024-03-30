import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SearchField = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
      <InputLabel id="music-genre-label">Music Genre</InputLabel>
      <Select labelId="music-genre" id="music-genre" label="Music Genre">
        <MenuItem value={0}>All</MenuItem>
        <MenuItem value={1}>Rock</MenuItem>
        <MenuItem value={2}>Dance</MenuItem>
        <MenuItem value={3}>Light</MenuItem>
      </Select>
    </FormControl>
  );
};
