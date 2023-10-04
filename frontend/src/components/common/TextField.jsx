import React from 'react';
import MTextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import { Typography } from '@mui/material';

function CustomTextField(props) {
  const {
    label = "",
    placeholder = "",
    labelFontSize = '14px', // Add a default font size for the label
    placeholderFontSize = '16px', // Add a default font size for the placeholder
    variant = "outlined",
    size,
    fullWidth = true,
    inputSx,
    sx = {},
    labelSx = {},
    InputProps,
    onChange,
    name,
    group,
    ...restprops
  } = props;

  const textFieldStyles = {
    small: {
      fontSize: 12,
    },
    medium: {
      fontSize: 14,
    },
    large: {
      fontSize: 16,
    },
  };

  const sizeStyle = textFieldStyles[size] || textFieldStyles.default;

  const finalSx = {
    ...sizeStyle,
    ...sx,
  };

  const typographyStyles = {
    color: 'var(--text-black, #101828)',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: '20px',
    margin: '15px 0'
  };

  return (
    <div>
      <InputLabel sx={{ ...labelSx, fontSize: labelFontSize }}>{label}</InputLabel>
      <MTextField
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        sx={finalSx}
        placeholder={placeholder} // Include the placeholder prop here
        label={props.select ? label : null}
        InputProps={InputProps}
        onChange={(e)=>onChange({name,value:e.target.value,group })}
       
        {...restprops}
      />
    </div>
  );
}

export default React.memo(CustomTextField);
