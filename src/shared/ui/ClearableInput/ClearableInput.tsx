import React from "react";
import { ReactComponent as XMarkIcon } from "@assets/x-mark.svg";
import { IconButton, InputAdornment } from "@mui/material";

import { UiInput, UiInputProps } from "../Input";

export interface UiClearableInputProps extends UiInputProps {
  onClear?: () => void;
}

export const UiClearableInput: React.FC<UiClearableInputProps> = React.memo(({ onClear, ...props }) => {
  const handleClickShowClearable = () => {
    onClear?.();
  };

  const handleMouseDownClearable = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const hasValue =
    (typeof props.value === "string" && props.value.length) ||
    (typeof props.value !== "string" && props.value !== undefined);

  return (
    <UiInput
      {...props}
      endAdornment={
        hasValue ? (
          <InputAdornment position="end">
            <IconButton
              disableRipple
              aria-label="clear input value"
              onClick={handleClickShowClearable}
              onMouseDown={handleMouseDownClearable}
              edge="end"
            >
              <XMarkIcon />
            </IconButton>
          </InputAdornment>
        ) : null
      }
    />
  );
});

UiClearableInput.displayName = "UiClearableInput";
