import {
  ACCOUNTING_UNITS_ROUTE,
  BUILDINGS_ROUTE,
  CONTRACTS_ROUTE,
  DOCS_ROUTE,
  HOME_ROUTE,
  SETTINGS_ROUTE,
  TRANSPORT_ROUTE,
  USERS_ROUTE,
} from "@app/routes";
import { ReactComponent as BoltIcon } from "@assets/bolt.svg";
import { ReactComponent as BuildingOfficeIcon } from "@assets/building-office.svg";
import { ReactComponent as ClipboardIcon } from "@assets/clipboard-document-list.svg";
import { ReactComponent as ToothIcon } from "@assets/cog-6-tooth.svg";
import { ReactComponent as DocumentIcon } from "@assets/document-text.svg";
import { ReactComponent as HomeIcon } from "@assets/home.svg";
import { ReactComponent as TruckIcon } from "@assets/truck.svg";
import { ReactComponent as UsersIcon } from "@assets/users.svg";

export const NAVIGATION_PAGES = [
  {
    path: HOME_ROUTE.base,
    label: "Главная",
    Icon: HomeIcon,
  },
  {
    path: BUILDINGS_ROUTE.base,
    label: "Здания",
    Icon: BuildingOfficeIcon,
  },
  {
    path: TRANSPORT_ROUTE.base,
    label: "Транспорт",
    Icon: TruckIcon,
  },
  {
    path: ACCOUNTING_UNITS_ROUTE.base,
    label: "Узлы учета",
    Icon: BoltIcon,
  },
  {
    path: CONTRACTS_ROUTE.base,
    label: "Энергосервисные контракты",
    Icon: ClipboardIcon,
  },
  {
    path: DOCS_ROUTE.base,
    label: "Документы",
    Icon: DocumentIcon,
  },
  {
    path: USERS_ROUTE.base,
    label: "Люди",
    Icon: UsersIcon,
  },
  {
    path: SETTINGS_ROUTE.base,
    label: "Настройки",
    Icon: ToothIcon,
  },
];
