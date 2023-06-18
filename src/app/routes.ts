export type Route = {
  base: string;
};

export const ROOT_ROUTE = {
  base: "/",
} satisfies Route;

export const SIGN_IN_ROUTE = {
  base: ROOT_ROUTE.base + "sign-in",
} satisfies Route;

export const SIGN_UP_ROUTE = {
  base: ROOT_ROUTE.base + "sign-up",
} satisfies Route;

export const HOME_ROUTE = {
  base: ROOT_ROUTE.base,
} satisfies Route;

export const BUILDINGS_ROUTE = {
  base: ROOT_ROUTE.base + "buildings",
} satisfies Route;

export const TRANSPORT_ROUTE = {
  base: ROOT_ROUTE.base + "transport",
} satisfies Route;

export const ACCOUNTING_UNITS_ROUTE = {
  base: ROOT_ROUTE.base + "accounting-units",
} satisfies Route;

export const CONTRACTS_ROUTE = {
  base: ROOT_ROUTE.base + "contracts",
} satisfies Route;

export const DOCS_ROUTE = {
  base: ROOT_ROUTE.base + "docs",
} satisfies Route;

export const USERS_ROUTE = {
  base: ROOT_ROUTE.base + "users",
} satisfies Route;

export const SETTINGS_ROUTE = {
  base: ROOT_ROUTE.base + "settings",
} satisfies Route;
