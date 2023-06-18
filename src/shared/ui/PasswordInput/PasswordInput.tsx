import React from "react";
import { ReactComponent as EyeIcon } from "@assets/eye.svg";
import { ReactComponent as EyeSlashIcon } from "@assets/eye-slash.svg";
import { IconButton, InputAdornment } from "@mui/material";

import { UiInput, UiInputProps } from "../Input";

export interface UiPasswordInputProps extends UiInputProps {}

export const UiPasswordInput: React.FC<UiPasswordInputProps> = React.memo(props => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <UiInput
      {...props}
      type={showPassword ? "text" : "password"}
      endAdornment={
        typeof props.value === "string" && props.value.length ? (
          <InputAdornment position="end">
            <IconButton
              disableRipple
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </IconButton>
          </InputAdornment>
        ) : null
      }
    />
  );
});

UiPasswordInput.displayName = "UiPasswordInput";
