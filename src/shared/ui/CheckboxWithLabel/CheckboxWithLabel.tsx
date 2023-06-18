import { Checkbox } from "@mui/material";

import { UiCheckboxIcon } from "../Checkbox/CheckboxIcon";
import { UiCheckedCheckboxIcon } from "../Checkbox/CheckedCheckboxIcon";
import { UiFormControlLabelBase } from "./FormControlLabelBase";

export interface UiCheckboxWithLabelProps extends Omit<UiFormControlLabelBase, "control"> {}

export const UiCheckboxWithLabel: React.FC<UiCheckboxWithLabelProps> = props => {
  return (
    <UiFormControlLabelBase
      {...props}
      control={
        <Checkbox
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          disableRipple
          icon={<UiCheckboxIcon />}
          checkedIcon={<UiCheckedCheckboxIcon />}
        />
      }
      slotProps={{
        typography: {
          variant: "text/medium",
        },
      }}
    />
  );
};
