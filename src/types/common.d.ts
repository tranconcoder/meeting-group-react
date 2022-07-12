export interface ObjectAnyKey {
	[key: string]: any;
}

export type Timeout = NodeJS.Timeout;

export interface FormatImageOptions {
	compressFormat: 'PNG' | 'JPEG';
	maxWidth: number;
	maxHeight: number;
	quality: number;
	rotation: number;
	minWidth?: number;
	minHeight?: number;
	outputFile?: 'base64' | 'blob' | 'file';
}
