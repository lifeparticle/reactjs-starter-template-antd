import { PageA, PageB } from "pages";
import { FC } from "react";

export type RouteId = "/" | "pagea" | "pageb";

interface Route {
	path: string;
	component: FC;
	id: RouteId;
}

export const routes: Route[] = [
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
];

export const routesById = routes.reduce((acc, route) => {
	acc[route.id] = route;
	return acc;
}, {} as Record<RouteId, Route>);
