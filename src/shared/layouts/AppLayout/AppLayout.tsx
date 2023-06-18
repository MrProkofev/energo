import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export interface AppLayoutProps {}

export const AppLayout: React.FC<AppLayoutProps> = () => {
  return (
    <Stack direction="row" width="100vw" height="100vh" overflow="hidden">
      <Outlet />
    </Stack>
  );
};
