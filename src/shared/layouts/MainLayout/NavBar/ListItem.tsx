import { ListItem, ListItemButton, ListItemButtonProps, ListItemIcon, ListItemText } from "@mui/material";

export interface NavBarListItemProps extends ListItemButtonProps {
  label: string;
  Icon: React.JSXElementConstructor<object>;
  /**
   * @default "expanded"
   */
  size?: "collapsed" | "expanded";
}

export const NavBarListItem: React.FC<NavBarListItemProps> = ({ Icon, label, size = "expanded", ...props }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton {...props} disableRipple>
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
      </ListItemButton>
    </ListItem>
  );
};
