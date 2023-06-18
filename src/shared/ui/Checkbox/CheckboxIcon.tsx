import { styled } from "@mui/material";

export const UiCheckboxIcon = styled("span")(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: 24,
  height: 24,
  border: "1px solid",
  borderColor: "#A3AAB5",

  "input:disabled ~ &": {
    background: "#F2F2F2",
  },
}));
