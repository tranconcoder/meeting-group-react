import type { RouteInformationType } from '../types/routes';

import { ProfilePage } from '../pages';

const informationRoute: RouteInformationType = {
	profile: {
		path: 'profile',
		fullPath: '',
		reactElement: <ProfilePage />,
	},
};

export default informationRoute;
