import { List, listItemButtonClasses, listItemClasses, listItemIconClasses, ListProps, styled } from "@mui/material";

export interface NavBarListProps extends ListProps {}

export const NavBarList: React.FC<NavBarListProps> = styled(List)(({ theme }) => ({
  padding: 0,

  [`& .${listItemButtonClasses.root}`]: {
    height: 64,
    padding: theme.spacing(0, 2.5),
    gap: theme.spacing(1.5),

    "&:hover": {
      backgroundColor: "transparent",
    },

    [`& .${listItemIconClasses.root}`]: {
      minWidth: "auto",
      color: "#37BA73",
    },

    [`&.${listItemClasses.selected}`]: {
      backgroundColor: "#37BA73",
      color: theme.palette.common.white,

      "&:hover": {
        backgroundColor: "#37BA73",
        color: theme.palette.common.white,
      },

      [`& .${listItemIconClasses.root}`]: {
        color: theme.palette.common.white,
      },
    },
  },
}));
