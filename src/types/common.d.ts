import { RankType } from './initStore';

export interface ObjectAnyKey<T> extends Object {
	[key: string]: T;
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

// RankConfig
export type RankConfig = {
	[Key in RankType]: string;
};
