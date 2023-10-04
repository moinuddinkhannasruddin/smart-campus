import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";

function AutocompleteField({
  label,
  value,
  options,
  size,
  onChange,
  InputLabelProps,
}) {
  return (
    <Autocomplete
      fullWidth
      multiple
      size={size}
      options={options}
      value={value}
      onChange={onChange}
      renderTags={(value, getTagProps) =>
        value.map((option, index) => (
          <Chip label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputLabelProps={InputLabelProps}
          InputProps={{ ...params.InputProps, style: { fontSize: 16 } }}
          fullWidth
        />
      )}
    />
  );
}

export default AutocompleteField;
