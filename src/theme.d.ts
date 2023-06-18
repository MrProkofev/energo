declare module "@mui/material/styles" {
  interface TypographyVariants {
    "headers/h1": React.CSSProperties;
    "headers/h2": React.CSSProperties;
    "headers/h3": React.CSSProperties;
    "headers/h4": React.CSSProperties;
    "headers/h5": React.CSSProperties;
    "headers/h6": React.CSSProperties;
    "caption/large": React.CSSProperties;
    "body/medium": React.CSSProperties;
    "body/small": React.CSSProperties;
    "caption/medium": React.CSSProperties;
    "caption/small": React.CSSProperties;
    "text/large": React.CSSProperties;
    "text/medium": React.CSSProperties;
    "text/small": React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    "headers/h1"?: React.CSSProperties;
    "headers/h2"?: React.CSSProperties;
    "headers/h3"?: React.CSSProperties;
    "headers/h4"?: React.CSSProperties;
    "headers/h5"?: React.CSSProperties;
    "headers/h6"?: React.CSSProperties;
    "caption/large"?: React.CSSProperties;
    "body/medium"?: React.CSSProperties;
    "body/small"?: React.CSSProperties;
    "caption/medium"?: React.CSSProperties;
    "caption/small"?: React.CSSProperties;
    "text/large"?: React.CSSProperties;
    "text/medium"?: React.CSSProperties;
    "text/small"?: React.CSSProperties;
  }

  interface Palette {
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    "headers/h1": true;
    "headers/h2": true;
    "headers/h3": true;
    "headers/h4": true;
    "headers/h5": true;
    "headers/h6": true;
    "caption/large": true;
    "body/medium": true;
    "body/small": true;
    "caption/medium": true;
    "caption/small": true;
    "text/large": true;
    "text/medium": true;
    "text/small": true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }

  interface ButtonClasses {
    textNeutral: string;
    outlinedNeutral: string;
    containedNeutral: string;
  }
}

export default function createTheme(options?: ThemeOptions, ...args: object[]): Theme;
