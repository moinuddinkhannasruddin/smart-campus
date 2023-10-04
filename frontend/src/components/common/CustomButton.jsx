import React from "react";
import Button from "@mui/material/Button";

function CustomButton(props) {
  const {
    text = "",
    size,
    loading = false,
    variant = "contained",
    color = "primary",
    endIcon,
    startIcon,
    sx = {},
    ...restProps
  } = props;

  const buttonStyles = {
    default: {},
    primary: {
      color: "#fff",
      backgroundColor: "#104960",
      fontFamily: "'Inter', sans-serif",
      "&:hover": {
        backgroundColor: "#013246",
      },
    },
    secondary: {
      color: "#104960",
      backgroundColor: "#fff",
      borderColor: "#104960",
      fontFamily: "'Inter', sans-serif",
      "&:hover": {
        backgroundColor: "#E7E7E7",
        borderColor: "#104960",
      },
    },

    success: {
      color: "#fff",
      backgroundColor: "#25A9E0",
      borderColor: "#25A9E0",
      fontFamily: "'Inter', sans-serif",
      "&:hover": {
        backgroundColor: "#006D9A",
        borderColor: "#006D9A",
      },
    },
    error: {
      color: "#fff",
      backgroundColor: "#104960",
      fontFamily: "'Inter', sans-serif",

      "&:hover": {
        backgroundColor: "#25A9E04C",
        borderColor: "#25A9E0",
        border: "2px solid #25A9E0",
      },
    },
  };

  const buttonDimension = {
    small: {
      height: 36,

      fontSize: 12,
      padding: "8px, 16px, 8px, 16px",
    },
    medium: {
      height: 40,
      fontSize: 14,
      padding: "16px, 16px, 16px, 16px",
    },
    large: {
      height: 56,

      fontSize: 16,
      padding: "18px, 20px, 18px, 20px",
    },
  };

  const iconSizeAdjustment = {
    small: {
      padding: "2px 5px 2px 5px",
    },
    medium: {
      padding: "3px 6px 3px 6px",
    },
    large: {
      padding: "5px 10px 5px 10px",
    },
  };

  const style = buttonStyles[color] || buttonStyles.default;
  const dimension = buttonDimension[size] || buttonDimension.default;
  const adjustedSize = iconSizeAdjustment[size] || iconSizeAdjustment.default;

  const finalSx = {
    ...style,
    ...dimension,
    ...adjustedSize,
    textTransform: "capitalize",
    ...sx,
  };

  return (
    <Button
      variant={variant}
      size={size}
      color={color}
      loading={loading}
      endIcon={endIcon}
      startIcon={startIcon}
      sx={finalSx}
      {...restProps}
    >
      {text}
    </Button>
  );
}

export default CustomButton;
