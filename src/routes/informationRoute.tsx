import type { RouteInformationType } from '../types/routes';

import Profile from '../components/Information/Profile/Profile';
import InformationLayout from '../components/Layouts/Information/InformationLayout';
import NeedAuth from '../components/NeedAuth/NeedAuth';
import NothingPage from '../pages/NothingPage/NothingPage';

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
	others: {
		path: '*',
		fullPath: '',
		reactElement: <NothingPage />,
	},
};

export default informationRoute;
