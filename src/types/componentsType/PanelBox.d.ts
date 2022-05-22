import { IconType } from 'react-icons';

declare interface PanelButton {
	title: string;
	Icon: IconType;
	handleClick?: () => void;
}

declare interface PanelSlide {
	id: string;
	title: string;
	Icon: IconType;
	handleClick?: () => void;
	childList?: Array<Omit<PanelSlide, 'childList'>>;
}
