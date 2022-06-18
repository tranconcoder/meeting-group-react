import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import NothingPage from '../pages/NothingPage/NothingPage';
import { RouteListType } from '../types/routes';

import informationRoute from './informationRoute';

export default [
	{
		title: 'homePage',
		path: '/',
		reactElement: <HomePage />,
	},
	{
		title: 'authPage',
		path: '/auth',
		reactElement: <AuthPage />,
	},
	{
		title: 'informationPage',
		path: '/information',
		childrenRoute: [...informationRoute],
	},
	{
		title: 'informationPage',
		path: '*',
		reactElement: <NothingPage />,
	},
] as RouteListType;
