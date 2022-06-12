import AuthPage from '../pages/AuthPage/AuthPage';
import HomePage from '../pages/HomePage/HomePage';
import { RouteListType } from '../types/routes';

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
] as RouteListType;
