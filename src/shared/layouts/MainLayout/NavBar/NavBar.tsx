import React from "react";
import { ReactComponent as ArrowLeftIcon } from "@assets/arrow-left-on-rectangle.svg";
import { ReactComponent as ArrowRightIcon } from "@assets/arrow-right-on-rectangle.svg";
import { Stack } from "@mui/material";
import { UiLogo } from "@shared/ui/Logo";
import { matchPath, useLocation } from "react-router-dom";

import { NavBarListItem } from "./ListItem";
import { NavBarListItemLink } from "./ListItemLink";
import { NavBarList } from "./ListList";
import { NavBarBase, NavBarBaseProps } from "./NavBarBase";
import { NAVIGATION_PAGES } from "./navigationPages";

const LOCAL_STORAGE_KEY = "navbar-size";

function isSize(value: unknown): value is "expanded" | "collapsed" {
  return typeof value === "string" && ["expanded", "collapsed"].includes(value);
}

export interface NavBarProps extends NavBarBaseProps {}

export const NavBar: React.FC<NavBarProps> = () => {
  const location = useLocation();

  const storedSize = localStorage.getItem(LOCAL_STORAGE_KEY);

  const [size, setSize] = React.useState<"expanded" | "collapsed">(isSize(storedSize) ? storedSize : "expanded");

  const handlerIsCollapsedChange = () => {
    const newSize = size === "collapsed" ? "expanded" : "collapsed";

    setSize(newSize);
    localStorage.setItem(LOCAL_STORAGE_KEY, newSize);
  };

  return (
    <NavBarBase size={size}>
      <Stack direction="column">
        <Stack direction="row" alignItems="center" px={2} height={80}>
          <UiLogo
            sx={{ width: size === "collapsed" ? 32 : 130, height: size === "collapsed" ? 32 : 48 }}
            isShort={size === "collapsed"}
          />
        </Stack>
        <NavBarList>
          {NAVIGATION_PAGES.map(({ path, label, Icon }) => (
            <NavBarListItemLink
              key={path}
              to={path}
              Icon={Icon}
              label={label}
              selected={!!matchPath(path, location.pathname)}
              size={size}
            />
          ))}
        </NavBarList>
      </Stack>
      <NavBarList>
        <NavBarListItem
          Icon={size === "collapsed" ? ArrowRightIcon : ArrowLeftIcon}
          label={size === "collapsed" ? "Развернуть" : "Свернуть"}
          size={size}
          onClick={handlerIsCollapsedChange}
        />
      </NavBarList>
    </NavBarBase>
  );
};
