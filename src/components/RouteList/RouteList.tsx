import { Route, Routes } from 'react-router-dom';

import RouteListData from '../../routes';
import { RouteListType } from '../../types/routes';

function RouteList() {
	const renderList = (routeList: RouteListType) => {
		return routeList.map((route, index) => (
			<Route
				{...route.customAttributes}
				key={index}
				element={route.reactElement}
				path={route.path}
			>
				{route.childrenRoute && renderList(route.childrenRoute)}
			</Route>
		));
	};

	return <Routes>{renderList(RouteListData)}</Routes>;
}

export default RouteList;
