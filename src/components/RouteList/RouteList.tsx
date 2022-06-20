import type { RouteRootType, RouteType } from '../../types/routes';

import { Route, Routes } from 'react-router-dom';
import routeRoot from '../../routes';

function RouteList() {
	const renderList = (routeList: RouteRootType) => {
		return Object.entries(routeList).map(
			([key, route]: [key: string, route: RouteType]) => (
				<Route
					{...route.customAttributes}
					key={key}
					element={route.reactElement}
					path={route.path}
				>
					{route.childrenRoute && renderList(route.childrenRoute)}
				</Route>
			)
		);
	};

	return <Routes>{renderList(routeRoot)}</Routes>;
}

export default RouteList;
