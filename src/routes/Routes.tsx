import { Spin } from "antd";
import { routes } from "data/routeData";
import { FC, Suspense } from "react";
import { Routes as RRDRoutes, Route } from "react-router-dom";

const Routes: FC = () => {
	return (
		<Suspense fallback={<Spin />}>
			<RRDRoutes>
				{routes.map((route) => (
					<Route
						key={route.path}
						path={route.path}
						element={<route.component />}
					/>
				))}
			</RRDRoutes>
		</Suspense>
	);
};

export default Routes;
