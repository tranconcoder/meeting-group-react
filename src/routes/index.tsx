import type { RouteRootType, RouteType } from '../types/routes';

import informationRoute from './informationRoute';

import { AuthPage, HomePage, NothingPage } from '../pages';
import EditTextPage from './EditTextPage';

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
	editTextPage: {
		path: 'edit',
		fullPath: '',
		reactElement: <EditTextPage />,
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
