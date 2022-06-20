import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import NothingPage from '../pages/NothingPage/NothingPage';
import { RouteRootType, RouteType } from '../types/routes';

import informationRoute from './informationRoute';

const routeRoot: RouteRootType = {
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
};

function addFullPath(routeList: any, currentPath: string) {
	for (const key in routeList) {
		const route: RouteType =
			routeList[key as keyof RouteRootType];

		handleAddPath(route, currentPath);
	}

	function handleAddPath(
		routeToAdd: RouteType,
		currentPath: string
	) {
		routeToAdd.fullPath = `${currentPath}/${routeToAdd.path}`;

		if (routeToAdd.childrenRoute) {
			addFullPath(
				routeToAdd.childrenRoute,
				routeToAdd.fullPath
			);
		}
	}

	return routeList;
}

export default addFullPath(routeRoot, '') as RouteRootType;
