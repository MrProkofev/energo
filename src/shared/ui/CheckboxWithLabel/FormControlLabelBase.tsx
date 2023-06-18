import {
  checkboxClasses,
  FormControlLabel,
  formControlLabelClasses,
  FormControlLabelProps,
  styled,
} from "@mui/material";

export interface UiFormControlLabelBase extends FormControlLabelProps {}

export const UiFormControlLabelBase = styled(FormControlLabel)(({ theme }) => ({
  [`&.${formControlLabelClasses.root}`]: {
    width: "fit-content",
    gap: theme.spacing(1.5),
    margin: 0,
  },

  [`& .${checkboxClasses.root}`]: {
    borderRadius: theme.spacing(1),
    padding: 0,
  },
}));
