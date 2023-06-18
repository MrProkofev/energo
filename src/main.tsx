import "@fontsource-variable/inter";
import React from "react";
import { router } from "@app/router";
import { theme } from "@app/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
  throw new Error(`The root element was not found`);
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
