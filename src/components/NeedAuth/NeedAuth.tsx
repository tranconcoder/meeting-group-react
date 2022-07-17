import { Fragment } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import type { NeedAuthProps } from '../../types/componentsType/NeedAuth';

import { useAppDispatch, useAppSelector } from '../../common/reduxHooks';

import routeRoot from '../../routes';
import { setUrl } from '../../redux/slices/urlManager';

function NeedAuth({ children }: NeedAuthProps) {
	const dispatch = useAppDispatch();

	const isLogged = useAppSelector(state => state.auth.isLogged);
	const currentPath = useLocation().pathname;

	if (!isLogged) {
		dispatch(
			setUrl({
				accessWhenLogged: currentPath,
			})
		);
	}

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
