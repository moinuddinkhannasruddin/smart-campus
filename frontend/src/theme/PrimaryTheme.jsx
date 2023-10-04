import React from "react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

const themeOptions = {
  palette: {
    type: "light",
    common: {
      black: "#000",
      white: "#ffffff",
      border: "#D0D5DD",
    },
    primary: {
      main: "#104960",
      light: "#25A9E0",
      dark: "#175CD3",
      contrast: "#E4F7FF",
    },
    secondary: {
      main: "#F2FAFE",
      dark: "#0D3B4E",
      light: "#114C65",
      contrast: "#114C65",
      text: "#9E9E9E",
    },
    blue: {
      main: "#104960",
      dark100: "#25A9E0",
      dark200: "#447DE1",
      dark300: "#175CD3",
      light100: "#E5F7FF",
      light200: "#E4F7FF",
    },
    chart: {
      failed: "#BBE4F5",
      bookingdone: "#E6F4FA",
      lead: "#0D3B4E",
      interested: "#114C65",
      meetingdone: "#166586",
      visitdone: "#1C7FA8",
      negotiation: "#2198CA",
      unresponsive: "#DAF4FF",
    },
    error: {
      main: "#F04438",
      light: "#FFE5E3",
      dark: "#E92C2C",
      contrast: "#E5A09A",
    },
    success: {
      main: "#12B76A",
      light: "#00BA34",
      dark: "#079B56",
      contrast: "#42D692",
    },
    grey: {
      10: "#EEE",
      50: "#F9FAFB",
      100: "#E7E7E7",
      200: "#CBCBCB",
      300: "#9C9C9C",
      400: "#667085",
      600: "#475467",
      700: "#344054",
      900: "#101828",
      450: "#BBE4F5",
      white: "#F8F8F8",
      light: "#98A2B3",
    },
    text: {
      primary: "#101828",
      secondary: "#667085",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: `"Inter"`,
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
      fontSize: "3.75rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "2.5rem",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    buttonLarge: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    buttonMedium: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    buttonSmall: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    subtitle3: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    typo12: {
      fontSize: "0.75rem",
      fontWeight: 500,
    },
    typo12light: {
      fontSize: "0.75rem",
      fontWeight: 400,
    },
    typo12medium: {
      fontSize: "0.75rem",
      fontWeight: 600,
    },
    typo14: {
      fontSize: "0.875rem",
      fontWeight: 500,
    },
    typo14light: {
      fontSize: "0.875rem",
      fontWeight: 400,
    },
    typo14medium: {
      fontSize: "0.875rem",
      fontWeight: 600,
    },
    typo16: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    typo16light: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    typo16medium: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    typo18: {
      fontSize: "1.125rem",
      fontWeight: 500,
    },
    typo18light: {
      fontSize: "1.125rem",
      fontWeight: 400,
    },
    typo18medium: {
      fontSize: "1.125rem",
      fontWeight: 600,
    },
    typo20: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    typo20light: {
      fontSize: "1.25rem",
      fontWeight: 400,
    },
    typo20medium: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
    typo22: {
      fontSize: "1.375rem",
      fontWeight: 500,
    },
    typo22light: {
      fontSize: "1.375rem",
      fontWeight: 400,
    },
    typo22medium: {
      fontSize: "1.375rem",
      fontWeight: 600,
    },
    typo24: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    typo24light: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    typo24medium: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    typo26: {
      fontSize: "1.625rem",
      fontWeight: 500,
    },
    typo26light: {
      fontSize: "1.625rem",
      fontWeight: 400,
    },
    typo26Medium: {
      fontSize: "1.625rem",
      fontWeight: 600,
    },
    typo28: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    typo28light: {
      fontSize: "1.75rem",
      fontWeight: 400,
    },
    typo28medium: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    typo30: {
      fontSize: "1.875rem",
      fontWeight: 500,
    },
    typo30light: {
      fontSize: "1.875rem",
      fontWeight: 400,
    },
    typo30medium: {
      fontSize: "1.875rem",
      fontWeight: 600,
    },
    typo32: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    typo32light: {
      fontSize: "2rem",
      fontWeight: 400,
    },
    typo32medium: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    typo36: {
      fontSize: "2.25rem",
      fontWeight: 500,
    },
    typo36light: {
      fontSize: "2.25rem",
      fontWeight: 400,
    },
    typo36medium: {
      fontSize: "2.25rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1.75rem",
      letterSpacing: "-0.013em",
    },
    body2: {
      fontSize: "1.5rem",
      letterSpacing: "-0.011em",
    },
    body3: {
      fontSize: "1.25rem",
      letterSpacing: "-0.011em",
    },
    body4: {
      fontSize: "1.125rem",
      letterSpacing: "-0.011em",
    },
    body5: {
      fontSize: "1rem",
      letterSpacing: "-0.011em",
    },
    small: {
      fontSize: "0.875rem",
      letterSpacing: "-0.011em",
    },
  },
};

let theme = createTheme(themeOptions);

//Responsive theme size
theme = responsiveFontSizes(theme, {
  variants: ["body2", "subtitle2"],
});

const PrimaryTheme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default PrimaryTheme;
