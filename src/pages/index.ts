import { lazy } from "react";

const PageA = lazy(() => import("pages/PageA"));
const PageB = lazy(() => import("pages/PageB"));
const PageNotFound = lazy(() => import("pages/PageNotFound"));

export { PageA, PageB, PageNotFound };
