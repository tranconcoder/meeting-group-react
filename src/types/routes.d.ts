import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

export interface RouteType<T = null> {
	path: string;
	fullPath: string;
	reactElement?: ReactElement;
	customAttributes?: Omit<RouteObject, 'children'>;
	childrenRoute?: T;
}

export interface RouteInformationType {
	profile: RouteType;
	others: RouteType;
}
export interface RouteRootType {
	homePage: RouteType;
	authPage: RouteType;
	informationPage: RouteType<RouteInformationType>;
	nothingPage: RouteType;
}
