import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface SelectOptionsProps {
  items: string[];
}

export const SelectOptions = (props: SelectOptionsProps) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 160 }} size="small">
      <InputLabel id="music-genre-label">Music Genre</InputLabel>
      <Select labelId="music-genre" id="music-genre" label="Music Genre">
        {props.items.map((value) => (
          <MenuItem>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
