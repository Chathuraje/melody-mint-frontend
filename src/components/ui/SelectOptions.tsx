import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectOptions = () => {
  return (
    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
      <InputLabel id="music-genre-label">Music Genre</InputLabel>
      <Select labelId="music-genre" id="music-genre" label="Music Genre">
        <MenuItem>All</MenuItem>
        <MenuItem>Dance</MenuItem>
        <MenuItem>Light</MenuItem>
        <MenuItem>Other</MenuItem>
      </Select>
    </FormControl>
  );
};
