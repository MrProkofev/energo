import { ReactComponent as ErrorIcon } from "@assets/cancel.svg";
import { ReactComponent as InfoIcon } from "@assets/info.svg";
import { ReactComponent as SuccessIcon } from "@assets/success.svg";
import { ReactComponent as WarningIcon } from "@assets/warning.svg";

import { UiAlertBase, UiAlertBaseProps } from "./AlertBase";

export interface UiAlertProps extends UiAlertBaseProps {}

export const UiAlert: React.FC<UiAlertProps> = props => {
  return (
    <UiAlertBase
      {...props}
      iconMapping={{
        info: <InfoIcon />,
        warning: <WarningIcon />,
        success: <SuccessIcon />,
        error: <ErrorIcon />,
      }}
    />
  );
};
