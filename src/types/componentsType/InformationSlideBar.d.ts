import { Timeout } from '../common';

export interface InformationSlideBarProps {
	titleContent: string;
	setTitleContent: (value: string) => any;
}

export type TimeoutOrNull = Timeout | null;
