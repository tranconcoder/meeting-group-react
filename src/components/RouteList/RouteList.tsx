import { Route, Routes } from 'react-router-dom';

import Routelist from '../../routes';

function RouteList() {
	return (
		<Routes>
			{Routelist.map((route, index) => (
				<Route
					{...route.customAttributes}
					key={index}
					element={route.reactElement}
					path={route.path}
				/>
			))}
		</Routes>
	);
}

export default RouteList;
