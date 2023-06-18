import {
  FormControl,
  formHelperTextClasses,
  formLabelClasses,
  inputBaseClasses,
  InputBaseProps,
  styled,
} from "@mui/material";

export interface UiInputBaseProps extends InputBaseProps {}

export const UiInputFormControlBase = styled(FormControl)(({ theme }) => ({
  gap: theme.spacing(0.75),

  [`& .${formLabelClasses.root}`]: {
    ...theme.typography["text/medium"],
    position: "relative",
    transform: "none",
    color: "#282C35",
    marginLeft: theme.spacing(0.75),
  },

  [`& .${formHelperTextClasses.root}`]: {
    ...theme.typography["text/small"],
    margin: theme.spacing(0, 0, 0, 0.75),
    color: "#6A6A6A",

    [`&.${formHelperTextClasses.error}`]: {
      color: "#FF5724",
    },
  },

  [`& .${inputBaseClasses.root}`]: {
    ...theme.typography["button"],
    color: "#282C35",
    borderRadius: theme.spacing(1),
    position: "relative",
    backgroundColor: "#FFFFFF",
    border: "1px solid",
    borderColor: "#D2D4D7",
    boxSizing: "border-box",
    height: 56,
    width: "auto",
    padding: theme.spacing(0, 2),
    transition: theme.transitions.create(["border-color", "background-color", "box-shadow"]),

    "&:disabled": {
      backgroundColor: "#F2F2F2",
      color: "#C8CACD",
    },

    "&:hover:enabled": {
      borderColor: "#37BA73",
    },

    "&:focus:enabled": {
      borderColor: "#37BA73",
    },

    "&::placeholder": {
      color: "#A3AAB5",
      opacity: 1,
    },

    [`&.${inputBaseClasses.error}`]: {
      borderColor: "#FF5724",
    },
  },
}));
