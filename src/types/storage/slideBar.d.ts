import type { IconType } from 'react-icons';

export interface SlideBarSelection {
	title: string;
	icon: IconType;
	path: string;
	handleClick?: () => any;
}

export type SlideBarSelectionList = Array<SlideBarSelection>;
