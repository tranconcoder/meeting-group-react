import type { RouteRootType, RouteType } from '../types/routes';

import informationRoute from './informationRoute';

import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import NothingPage from '../pages/NothingPage/NothingPage';

const routeRoot: RouteRootType = getAndFormatRouteRoot({
	homePage: {
		path: '',
		fullPath: '',
		reactElement: <HomePage />,
	},
	authPage: {
		path: 'auth',
		fullPath: '',
		reactElement: <AuthPage />,
	},
	informationPage: {
		path: 'information',
		fullPath: '',
		childrenRoute: informationRoute,
	},
	nothingPage: {
		path: '*',
		fullPath: '',
		reactElement: <NothingPage />,
	},
});

function getAndFormatRouteRoot(routeList: any, currentPath: string = '') {
	for (const key in routeList) {
		const route: RouteType = routeList[key as keyof RouteRootType];

		handleAddPath(route, currentPath);
	}

	function handleAddPath(routeToAdd: RouteType, currentPath: string) {
		routeToAdd.fullPath = `${currentPath}/${routeToAdd.path}`;

		if (routeToAdd.childrenRoute) {
			getAndFormatRouteRoot(
				routeToAdd.childrenRoute,
				routeToAdd.fullPath
			);
		}
	}

	return routeList;
}

export default routeRoot;
