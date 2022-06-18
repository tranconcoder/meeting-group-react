import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

interface RouteType {
	title: string;
	path: string;
	reactElement: ReactElement;
	customAttributes: Omit<RouteObject, 'children'>;
	childrenRoute?: Array<RouteType>;
}

export type RouteListType = Array<RouteType>;
