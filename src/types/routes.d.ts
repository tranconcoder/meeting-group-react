import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

interface RouteType {
	title: string;
	path: string;
	reactElement: ReactElement;
	customAttributes: Omit<RouteObject, 'children'>;
}

export type RouteListType = Array<RouteType>;
