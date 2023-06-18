import React from "react";
import { InputBaseComponentProps } from "@mui/material";
import { IMask, IMaskInput } from "react-imask";

export interface UiMaskedInputBaseProps extends InputBaseComponentProps {
  mask?: IMask.AnyMaskedOptionsArray | string;
  definitions?: { [key: string]: IMask.MaskedPattern.PatternDefinition };
}

export const UiMaskedInputBase = React.forwardRef<HTMLElement, UiMaskedInputBaseProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <IMaskInput
        {...props}
        inputRef={ref}
        onAccept={(value: string) => {
          // onChange event emulation
          // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
          onChange?.({ target: { name: props.name, value } } as React.ChangeEvent<HTMLInputElement>);
        }}
        overwrite
      />
    );
  }
);

UiMaskedInputBase.displayName = "UiMaskedInputBase";
