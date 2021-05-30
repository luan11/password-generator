import { ReactNode } from 'react';

export interface PasswordContextData {
	letters: boolean;
	uppercase: boolean;
	numbers: boolean;
	special: boolean;
	custom: boolean;
	customContent: string;
	length: number;
	generated: string;
	toggleLetters: (enable: boolean) => void;
	toggleUppercase: (enable: boolean) => void;
	toggleNumbers: (enable: boolean) => void;
	toggleSpecial: (enable: boolean) => void;
	toggleCustom: (enable: boolean) => void;
	handleCustomContent: (value: string) => void;
	handleLength: (value: number) => void;
	hasGenerated: () => boolean;
	isAbleToGenerate: () => boolean;
	generate: (passwordLength?: number) => void;
};

export interface PasswordProviderProps {
	children: ReactNode;
};