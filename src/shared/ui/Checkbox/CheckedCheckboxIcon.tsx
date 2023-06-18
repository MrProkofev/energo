import { styled } from "@mui/material";

export const UiCheckedCheckboxIcon = styled("span")(({ theme }) => ({
  backgroundColor: "#474DD8",
  borderRadius: theme.spacing(1),

  "&:before": {
    content: '""',
    display: "block",
    width: 24,
    height: 24,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'  width='24' height='24' viewBox='-4 -5 24 24'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M15.5572 2.12132L5.5571 12.1214L0 7.18177L1.99309 4.93955L5.43599 7.9999L13.4359 0L15.5572 2.12132Z'" +
      " fill='%23fff'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));
