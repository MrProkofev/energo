import { styled } from "@mui/material";

export interface NavBarBaseProps {
  /**
   * @default "expanded"
   */
  size?: "collapsed" | "expanded";
}

export const NavBarBase = styled("div", {
  shouldForwardProp: propName => propName !== "size",
})<NavBarBaseProps>(({ theme, size = "expanded" }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: size === "expanded" ? 328 : 64,
  maxWidth: size === "expanded" ? 328 : 64,
  flexShrink: 0,
  flex: 1,
  backgroundColor: theme.palette.common.white,
  boxShadow: "2px 0px 12px rgba(211, 204, 204, 0.12)",
  zIndex: theme.zIndex.appBar + 1,
}));
