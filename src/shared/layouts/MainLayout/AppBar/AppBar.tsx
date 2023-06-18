import { Stack } from "@mui/material";

export interface AppBarProps {}

export const AppBar: React.FC<AppBarProps> = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={theme => ({
        height: 80,
        flexShrink: 0,
        backgroundColor: theme.palette.common.white,
      })}
    />
  );
};
