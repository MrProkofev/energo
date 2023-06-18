import React from "react";
import { FormHelperText, InputBase, InputLabel } from "@mui/material";

import { UiInputBaseProps, UiInputFormControlBase } from "./InputFormControlBase";

export interface UiInputProps extends UiInputBaseProps {
  label?: string;
  helperText?: string;
}

export const UiInput: React.FC<UiInputProps> = React.memo(({ label, helperText, error, ...props }) => {
  return (
    <UiInputFormControlBase error={error} variant="standard">
      {label && <InputLabel shrink>{label}</InputLabel>}
      <InputBase {...props} aria-describedby="ui-input-helper-text" />
      {helperText && <FormHelperText id="ui-input-helper-text">{helperText}</FormHelperText>}
    </UiInputFormControlBase>
  );
});

UiInput.displayName = "UiInput";
