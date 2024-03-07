import { INFO } from "./metas";
import { ROUTERS } from "./routes";

export const NAVIGATIONS = [
  {
    id: 1,
    name: "Home",
    link: ROUTERS.HOME,
  },
  {
    id: 2,
    name: "About us",
    link: ROUTERS.ABOUT_US,
  },
  {
    id: 3,
    name: "Products & Services",
    link: ROUTERS.PRODUCTS_AND_SERVICES,
  },
  {
    id: 4,
    name: "Technology & Innovation",
    link: ROUTERS.TECHNOLOGY_AND_INNOVATION,
  },
  {
    id: 5,
    name: "Legal & Compliance",
    link: ROUTERS.LEGAL_DISCLAIMER,
  },
  {
    id: 6,
    name: "Blog",
    link: INFO.BLOG,
    isExternal: true,
  },
];
