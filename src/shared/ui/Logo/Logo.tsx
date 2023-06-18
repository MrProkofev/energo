import { ReactComponent as FullLogoIcon } from "@assets/full_logo.svg";
import { ReactComponent as LogoIcon } from "@assets/logo.svg";
import { SvgIcon, SvgIconProps } from "@mui/material";

export interface UiLogoProps extends SvgIconProps {
  /**
   * @default false
   */
  isShort?: boolean;
}

export const UiLogo: React.FC<UiLogoProps> = ({ isShort, ...props }) => {
  return <SvgIcon {...props} inheritViewBox component={isShort ? LogoIcon : FullLogoIcon} />;
};
