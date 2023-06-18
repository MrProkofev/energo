import React from "react";
import { UiLoadingStab } from "@shared/ui/LoadingStab";
import { createBrowserRouter } from "react-router-dom";

import {
  ACCOUNTING_UNITS_ROUTE,
  BUILDINGS_ROUTE,
  CONTRACTS_ROUTE,
  DOCS_ROUTE,
  HOME_ROUTE,
  ROOT_ROUTE,
  SETTINGS_ROUTE,
  SIGN_IN_ROUTE,
  SIGN_UP_ROUTE,
  TRANSPORT_ROUTE,
  USERS_ROUTE,
} from "./routes";

const AppLayout = React.lazy(() => import("../shared/layouts/AppLayout"));
const MainLayout = React.lazy(() => import("../shared/layouts/MainLayout"));

const SignInPage = React.lazy(() => import("../pages/SignInPage"));
const SignUpPage = React.lazy(() => import("../pages/SignUpPage"));

const HomePage = React.lazy(() => import("../pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: ROOT_ROUTE.base,
    element: <AppLayout />,
    children: [
      {
        path: SIGN_IN_ROUTE.base,
        element: (
          <React.Suspense fallback={<UiLoadingStab />}>
            <SignInPage />
          </React.Suspense>
        ),
      },
      {
        path: SIGN_UP_ROUTE.base,
        element: (
          <React.Suspense fallback={<UiLoadingStab />}>
            <SignUpPage />
          </React.Suspense>
        ),
      },
      {
        element: (
          <React.Suspense fallback={<UiLoadingStab />}>
            <MainLayout />
          </React.Suspense>
        ),
        children: [
          {
            path: HOME_ROUTE.base,
            element: (
              <React.Suspense fallback={<UiLoadingStab />}>
                <HomePage />
              </React.Suspense>
            ),
          },
          {
            path: BUILDINGS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: TRANSPORT_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: ACCOUNTING_UNITS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: CONTRACTS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: DOCS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: USERS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
          {
            path: SETTINGS_ROUTE.base,
            element: <React.Suspense fallback={<UiLoadingStab />} />,
          },
        ],
      },
    ],
  },
]);
