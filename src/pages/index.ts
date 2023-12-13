import { lazy } from "react";

const PageA = lazy(() => import("pages/PageA"));
const PageB = lazy(() => import("pages/PageB"));

export { PageA, PageB };
