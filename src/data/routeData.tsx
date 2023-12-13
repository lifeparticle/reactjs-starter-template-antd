import { PageA, PageB, PageNotFound } from "pages";
import { FC } from "react";

export type RouteId = "/" | "pagea" | "pageb" | "pagenotfound";

interface Route {
	path: string;
	component: FC;
	id: RouteId;
}

export const routes: Route[] = [
	{
		id: "/",
		path: "/",
		component: PageA,
	},
	{
		id: "pagea",
		path: "/pagea",
		component: PageA,
	},
	{
		id: "pageb",
		path: "/pageb",
		component: PageB,
	},
	{
		id: "pagenotfound",
		path: "*",
		component: PageNotFound,
	},
];

export const routesById = routes.reduce((acc, route) => {
	acc[route.id] = route;
	return acc;
}, {} as Record<RouteId, Route>);
