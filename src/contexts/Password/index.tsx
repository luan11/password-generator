import { createContext, useState, useContext } from 'react';
import escapeStringRegexp from 'escape-string-regexp';
import RandExp from 'randexp';

import { PasswordContextData, PasswordProviderProps } from './types';

export const PasswordContext = createContext({} as PasswordContextData);

export function PasswordProvider({ children }: PasswordProviderProps) {
	const [letters, setLetters] = useState(true);
	const [uppercase, setUppercase] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [special, setSpecial] = useState(true);
	const [custom, setCustom] = useState(false);
	const [customContent, setCustomContent] = useState('');

	const [length, setLength] = useState(16);

	const [generated, setGenerated] = useState('');

	function toggleLetters(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setLetters(enable);
	}

	function toggleUppercase(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setUppercase(enable);
	}

	function toggleNumbers(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setNumbers(enable);
	}

	function toggleSpecial(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setSpecial(enable);
	}

	function toggleCustom(enable: boolean) {
		toggleLetters(false);
		toggleUppercase(false);
		toggleNumbers(false);
		toggleSpecial(false);

		if (generated !== '') {
			setGenerated('');
		}

		setCustom(enable);
	}

	function handleCustomContent(value: string) {
		setCustomContent(value);
	}

	function handleLength(value: number) {
		setLength(value);

		generate(value);
	}

	function hasGenerated() {
		return generated.length > 0;
	}

	function isAbleToGenerate() {
		return letters || uppercase || numbers || special || (custom && customContent.length > 0);
	}

	function generate(passwordLength?: number) {
		if (!isAbleToGenerate()) {
			return;
		}

		passwordLength = passwordLength ? passwordLength : length;

		if (custom && customContent.length > 0) {
			const escaped = escapeStringRegexp(customContent);

			const regexp = new RegExp(`[${escaped}]{${passwordLength}}`);

			const randexp = new RandExp(regexp);

			const gen = randexp.gen();

			setGenerated(gen);

			return;
		}

		let content = '';

		if (letters) {
			content += 'a-z';
		}

		if (uppercase) {
			content += 'A-Z';
		}

		if (numbers) {
			content += '0-9';
		}

		if (special) {
			content += escapeStringRegexp(`!?@#$%&*_-+=()[]{};:,.`);
		}

		const regexp = new RegExp(`[${content}]{${passwordLength}}`);

		const randexp = new RandExp(regexp);

		const gen = randexp.gen();

		setGenerated(gen);
	}

	return (
		<PasswordContext.Provider value={{
			letters,
			uppercase,
			numbers,
			special,
			custom,
			customContent,
			length,
			generated,
			toggleLetters,
			toggleUppercase,
			toggleNumbers,
			toggleSpecial,
			toggleCustom,
			handleCustomContent,
			handleLength,
			hasGenerated,
			isAbleToGenerate,
			generate,
		}}>
			{children}
		</PasswordContext.Provider>
	);
}

export function usePasswordContext() {
	const context = useContext(PasswordContext);

	if (typeof context === 'undefined') {
		throw new Error('You have to use usePasswordContext inside <PasswordProvider />')
	}

	return { ...context };
}