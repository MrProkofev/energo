import React from "react";

import { UiClearableInput, UiClearableInputProps } from "../ClearableInput";
import { UiMaskedInputBase, UiMaskedInputBaseProps } from "./MaskedInputBase";

export interface UiMaskedInputBase
  extends UiClearableInputProps,
    Pick<UiMaskedInputBaseProps, "mask" | "definitions"> {}

export const UiMaskedInput: React.FC<UiMaskedInputBase> = React.memo(props => {
  return <UiClearableInput {...props} inputProps={{ mask: props.mask }} inputComponent={UiMaskedInputBase} />;
});

UiMaskedInput.displayName = "UiMaskedInput";
