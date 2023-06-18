import { UiButtonBase, UiButtonBaseProps } from "./ButtonBase";

export interface UiButtonProps extends UiButtonBaseProps {}

export const UiButton: React.FC<UiButtonProps> = props => {
  return <UiButtonBase {...props} />;
};
