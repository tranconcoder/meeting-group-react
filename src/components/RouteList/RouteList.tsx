import { Route, Routes } from 'react-router-dom';

import RouteListData from '../../routes';
import type { RouteRootType, RouteType } from '../../types/routes';

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

	return <Routes>{renderList(RouteListData)}</Routes>;
}

export default RouteList;
