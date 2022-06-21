import { ReactElement } from 'react';
import { RouteObject } from 'react-router-dom';

export interface RouteType<T = null> {
	path: string;
	fullPath: string;
	reactElement?: ReactElement;
	customAttributes?: Omit<RouteObject, 'children'>;
	childrenRoute: T;
}

export interface RouteNotChildType<T = null> {
	path: string;
	fullPath: string;
	reactElement?: ReactElement;
	customAttributes?: Omit<RouteObject, 'children'>;
}

export interface RouteInformationType {
	profile: RouteNotChildType;
}
export interface RouteRootType {
	homePage: RouteNotChildType;
	authPage: RouteNotChildType;
	informationPage: RouteType<RouteInformationType>;
	nothingPage: RouteNotChildType;
}
