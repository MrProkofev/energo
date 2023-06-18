import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

import { AppBar } from "./AppBar";
import { NavBar } from "./NavBar";

export interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <Stack
      direction="row"
      flex={1}
      sx={{
        backgroundColor: "#F9F9F9",
      }}
    >
      <NavBar />
      <Stack direction="column" flex={1}>
        <AppBar />
        <Stack direction="column" flex={1} px={8} py={6}>
          <Outlet />
        </Stack>
      </Stack>
    </Stack>
  );
};
