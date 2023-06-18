import { Checkbox, CheckboxProps } from "@mui/material";

import { UiCheckboxIcon } from "./CheckboxIcon";
import { UiCheckedCheckboxIcon } from "./CheckedCheckboxIcon";

export interface UiCheckboxProps extends CheckboxProps {}

export const UiCheckbox: React.FC<UiCheckboxProps> = props => {
  return <Checkbox {...props} disableRipple icon={<UiCheckboxIcon />} checkedIcon={<UiCheckedCheckboxIcon />} />;
};
