import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Chips(props) {
  const {
    label = "",
    size = "large",
    variant = "filled",
    icon,
    sx = {},
    ...restProps
  } = props;

  const chipStyles = {
    filled: {
      color: "#000",
      backgroundColor: "#104960",
      fontFamily: "'Inter', sans-serif",
      "&:hover": {
        backgroundColor: "#013246",
      },
    },
    outlined: {
      color: "#104960",
      borderColor: "#104960",
      fontFamily: "'Inter', sans-serif",
      "&:hover": {
        backgroundColor: "#E7E7E7",
        borderColor: "#104960",
      },
    },
  };

  const sizeStyle = {
    small: {
      fontSize: 10,
    },
    medium: {
      fontSize: 20,
    },
    large: {
      fontSize: 14,
    },
  };

  const style = chipStyles[variant] || chipStyles.default;
  const sizeDimension = sizeStyle[size] || sizeStyle.default;

  const finalSx = {
    ...style,
    ...sizeDimension,
    ...sx,
  };

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        variant={variant}
        size={size}
        icon={icon}
        sx={finalSx}
        label={label}
        {...restProps}
      ></Chip>
    </Stack>
  );
}

export default Chips;
