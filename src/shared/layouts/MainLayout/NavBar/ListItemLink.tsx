import { ListItem, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText, styled } from "@mui/material";
import { Link as RouterLink, LinkProps as RouterLinkProps } from "react-router-dom";

const ListItemLink = styled(ListItemButton<typeof RouterLink>)<RouterLinkProps>(() => ({}));

export interface NavBarListItemProps extends ListItemButtonProps<"a">, Pick<RouterLinkProps, "to"> {
  label: string;
  Icon: React.JSXElementConstructor<object>;
  /**
   * @default "expanded"
   */
  size?: "collapsed" | "expanded";
}

export const NavBarListItemLink: React.FC<NavBarListItemProps> = ({ Icon, label, size = "expanded", to, ...props }) => {
  return (
    <ListItem disablePadding>
      <ListItemLink {...props} to={to} component={RouterLink} disableRipple>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        {size === "expanded" && (
          <ListItemText
            primaryTypographyProps={{
              variant: "text/medium",
            }}
          >
            {label}
          </ListItemText>
        )}
      </ListItemLink>
    </ListItem>
  );
};
