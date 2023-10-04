import React from "react";
import CustomTextField from "./TextField";

function MultilineTextField({
  id,
  label,
  defaultValue,
  value,
  onChange,
  rows,
  labelProps,
  inputProps,
  ...otherProps
}) {
  return (
    <CustomTextField
      id={id}
      label={label}
      multiline
      rows={rows}
      value={value}
      onChange={onChange}
      defaultValue={defaultValue}
      labelProps={labelProps}
      inputProps={inputProps}
      {...otherProps}
    />
  );
}

export default MultilineTextField;
