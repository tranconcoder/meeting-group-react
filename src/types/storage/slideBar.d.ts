import { FunctionComponent } from 'react';

export interface SlideBarSelection {
	title: string;
	icon: string | FunctionComponent;
	path: string;
}

export type SlideBarSelectionList = Array<SlideBarSelection>;
