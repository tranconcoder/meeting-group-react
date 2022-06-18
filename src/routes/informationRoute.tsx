import Profile from '../components/Information/Profile/Profile';
import InformationLayout from '../components/Layouts/Information/InformationLayout';
import NothingPage from '../pages/NothingPage/NothingPage';
import { RouteListType } from '../types/routes';

const informationRoute: RouteListType = [
	{
		title: 'profile',
		path: 'profile',
		reactElement: <InformationLayout ContentBoard={Profile} />,
	},
	{
		title: 'others',
		path: '*',
		reactElement: <NothingPage />,
	},
];

export default informationRoute;
