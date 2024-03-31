import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface SelectOptionsProps {
  label: string;
  items: string[];
}

export const SelectOptions = (props: SelectOptionsProps) => {
  return (
    <FormControl sx={{ minWidth: 160 }} size="small">
      <InputLabel id="music-genre-label">{props.label}</InputLabel>
      <Select labelId="music-genre" id="music-genre" label="Music Genre">
        {props.items.map((value) => (
          <MenuItem>{value}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
