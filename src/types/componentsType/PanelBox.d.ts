import { IconType } from 'react-icons';

export interface PanelButton {
	title: string;
	Icon: IconType;
	handleClick?: () => void;
}

export interface PanelSlide {
	id: string;
	title: string;
	Icon: IconType;
	handleClick?: () => void;
	childList?: Array<Omit<PanelSlide, 'childList'>>;
}
