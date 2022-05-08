import { RouteProps } from 'wouter-preact';
import ElectionPage from '../pages/election';

const routes: RouteProps[] = [
	{
		path: '/',
		component: ElectionPage,
	},
];

export default routes;
