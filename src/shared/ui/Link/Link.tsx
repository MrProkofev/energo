import { Link, LinkProps } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

export interface UiLinkProps extends LinkProps, Pick<RouterLinkProps, "to"> {}

export const UiLink: React.FC<UiLinkProps> = props => {
  return (
    <Link
      {...props}
      component={RouterLink}
      variant="text/medium"
      sx={{
        width: "fit-content",
        textDecoration: "none",
        color: "#474DD8",
      }}
    />
  );
};
