import { Fragment } from 'react';
import { Navigate } from 'react-router-dom';

import type { NeedAuthProps } from '../../types/componentsType/NeedAuth';

import { useAppSelector } from '../../common/reduxHooks';

import routeRoot from '../../routes';

function NeedAuth({ children }: NeedAuthProps) {
	const isLogged = useAppSelector(state => state.auth.isLogged);

	return (
		<Fragment>
			{isLogged ? (
				children
			) : (
				<Navigate to={routeRoot.authPage.fullPath} replace />
			)}
		</Fragment>
	);
}

export default NeedAuth;
