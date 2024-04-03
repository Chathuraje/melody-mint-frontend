import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

interface SelectOptionsProps {
  label?: string;
  items: string[];
}

export const SelectOptions = (props: SelectOptionsProps) => {
  const { label, items } = props;

  const [item, setItem] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setItem(event.target.value as string);
  };

  return (
    <FormControl sx={{ minWidth: 260 }} size="small">
      <InputLabel id={label}>{label}</InputLabel>
      <Select
        labelId={label}
        id={label}
        value={item}
        label={label}
        onChange={handleChange}
        sx={{
          borderRadius: "10px",
          "& .MuiSelect-select": {
            borderRadius: "10px",
            backgroundColor: "white",
          },
        }}
      >
        {items.map((item) => (
          <MenuItem value={item}>{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
