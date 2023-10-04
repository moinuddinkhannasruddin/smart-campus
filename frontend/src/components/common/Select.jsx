import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";

export default function SelectMui(props) {
  const { label, labelId, id, size, name, value, onChange, items, ...other } =
    props;
  const theme = useTheme();

  return (
    <FormControl fullWidth size={size}>
      <InputLabel sx={{ fontSize: theme.typography.fontSize }}>
        {label}
      </InputLabel>
      <Select
        labelId={labelId}
        id={id}
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        {...other}
      >
        {items.map((element, index) => (
          <MenuItem
            sx={{ fontSize: theme.typography.fontSize }}
            key={`select_item_${index}`}
            value={element.value}
          >
            {element.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
