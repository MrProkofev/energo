import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiStack: {
      defaultProps: {
        useFlexGap: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          "headers/h1": "h1",
          "headers/h2": "h2",
          "headers/h3": "h3",
          "headers/h4": "h4",
          "headers/h5": "h5",
          "headers/h6": "h6",
          "caption/large": "p",
          "body/medium": "p",
          "body/small": "p",
          "caption/medium": "p",
          "caption/small": "p",
          "text/medium": "p",
          "text/small": "p",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
      `,
    },
  },
  palette: {
    common: {
      black: "#282C35",
      white: "#FFFFFF",
    },
    neutral: {
      main: "#282C35",
      contrastText: "#FFFFFF",
    },
    divider: "#E5E9EF",
  },
  typography: {
    fontFamily: "Lab Grotesque",
    "headers/h1": {
      fontSize: 64,
      fontWeight: 700,
      lineHeight: "83px",
    },
    "headers/h2": {
      fontSize: 48,
      fontWeight: 500,
      lineHeight: "60px",
    },
    "headers/h3": {
      fontSize: 40,
      fontWeight: 500,
      lineHeight: "52px",
    },
    "headers/h4": {
      fontSize: 32,
      fontWeight: 500,
      lineHeight: "42px",
    },
    "headers/h5": {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: "31px",
    },
    "headers/h6": {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "24px",
    },
    "caption/large": {
      fontSize: 18,
      fontWeight: 500,
      lineHeight: "23px",
    },
    "body/medium": {
      fontSize: 18,
      fontWeight: 400,
      lineHeight: "28px",
    },
    "body/small": {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "24px",
    },
    "caption/medium": {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "24px",
    },
    "caption/small": {
      fontSize: 16,
      fontWeight: 500,
      lineHeight: "20px",
    },
    "text/large": {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: "24px",
    },
    "text/medium": {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "20px",
    },
    "text/small": {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: "16px",
    },
    button: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "16px",
      textTransform: "none",
    },
  },
});
