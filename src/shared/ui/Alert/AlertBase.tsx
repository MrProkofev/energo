import { Alert, alertClasses, AlertProps, alpha, styled } from "@mui/material";

export interface UiAlertBaseProps extends AlertProps {}

export const UiAlertBase = styled(Alert)(({ theme }) => ({
  [`&.${alertClasses.root}`]: {
    height: 56,
    borderRadius: theme.spacing(2),
    flexShrink: 0,
    padding: theme.spacing(0, 2),
    alignItems: "center",

    [`. ${alertClasses.message}`]: {
      ...theme.typography["body/small"],
    },
  },

  [`&.${alertClasses.standard}`]: {
    [`&.${alertClasses.standardInfo}`]: {
      backgroundColor: alpha("#2094F3", 0.1),
      color: "#2094F3",
    },

    [`&.${alertClasses.standardWarning}`]: {
      backgroundColor: alpha("#FF9900", 0.1),
      color: "#FF9900",
    },

    [`&.${alertClasses.standardSuccess}`]: {
      backgroundColor: alpha("#009485", 0.1),
      color: "#009485",
    },

    [`&.${alertClasses.standardError}`]: {
      backgroundColor: alpha("#FF5724", 0.1),
      color: "#FF5724",
    },
  },
}));
