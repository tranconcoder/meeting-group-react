import type { RouteInformationType } from '../types/routes';

import { Profile } from '../components/Information';
import InformationLayout from '../components/Layouts/Information/InformationLayout';
import NeedAuth from '../components/NeedAuth';

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
