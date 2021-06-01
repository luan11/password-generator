import { ReactNode } from 'react';

export type GenerateData = {
	letters: boolean;
	uppercase: boolean;
	numbers: boolean;
	special: boolean;
	custom: boolean;
	customContent: string;
}

export interface PasswordContextData {
	theme: string;
	letters: boolean;
	uppercase: boolean;
	numbers: boolean;
	special: boolean;
	custom: boolean;
	customContent: string;
	length: number;
	generated: string;
	handleTheme: (choose: string) => void;
	toggleLetters: (enable: boolean) => void;
	toggleUppercase: (enable: boolean) => void;
	toggleNumbers: (enable: boolean) => void;
	toggleSpecial: (enable: boolean) => void;
	toggleCustom: (enable: boolean) => void;
	handleCustomContent: (value: string) => void;
	handleLength: (value: number) => void;
	hasGenerated: () => boolean;
	isAbleToGenerate: () => boolean;
	handleGenerate: () => void;
};

export interface PasswordProviderProps {
	children: ReactNode;
};