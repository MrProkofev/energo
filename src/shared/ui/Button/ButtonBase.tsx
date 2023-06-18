import { Button, buttonClasses, ButtonProps, styled } from "@mui/material";

export interface UiButtonBaseProps extends ButtonProps {}

export const UiButtonBase = styled((props: ButtonProps) => (
  <Button {...props} disableRipple disableElevation disableTouchRipple />
))(({ theme }) => ({
  borderRadius: theme.spacing(1),

  [`&.${buttonClasses.contained}`]: {
    color: theme.palette.common.white,
    backgroundColor: "#474DD8",

    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: "#6E73F0",
    },

    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: "#2E34C6",
    },

    "&:disabled": {
      color: "#C8CACD",
      backgroundColor: "#F2F2F2",
    },
  },

  [`&.${buttonClasses.outlined}`]: {
    [`&.${buttonClasses.outlinedPrimary}`]: {
      color: "#474DD8",
      borderColor: "#474DD8",
    },

    [`&.${buttonClasses.outlinedNeutral}`]: {
      color: theme.palette.common.black,
      borderColor: theme.palette.common.black,
    },

    "&:hover": {
      color: theme.palette.common.white,
      backgroundColor: "#6E73F0",
      borderColor: "#6E73F0",
    },

    "&:active": {
      color: theme.palette.common.white,
      backgroundColor: "#2E34C6",
      borderColor: "#2E34C6",
    },

    "&:disabled": {
      color: "#C8CACD",
      backgroundColor: "#F2F2F2",
      borderColor: "#F2F2F2",
    },
  },

  [`&.${buttonClasses.sizeLarge}`]: {
    height: 56,
  },

  [`&.${buttonClasses.sizeMedium}`]: {
    height: 40,
  },
}));
