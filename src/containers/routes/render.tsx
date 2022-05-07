import { Route, RouteProps, Router } from 'wouter-preact';

const renderRoutes = (routes: RouteProps[]) => {
	return routes ? (
		<Router>
			{routes.map((route, index) => (
				<Route key={route.path || index} {...route} />
			))}
		</Router>
	) : null;
};

export default renderRoutes;
