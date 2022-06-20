import type { RouteInformationType } from '../types/routes';

import Profile from '../components/Information/Profile/Profile';
import InformationLayout from '../components/Layouts/Information/InformationLayout';
import NeedAuth from '../components/NeedAuth/NeedAuth';

const informationRoute: RouteInformationType = {
	profile: {
		path: 'profile',
		fullPath: '',
		reactElement: (
			<NeedAuth>
				<InformationLayout ContentBoard={Profile} />
			</NeedAuth>
		),
	},
};

export default informationRoute;
