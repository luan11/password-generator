import { createContext, useState, useContext, useEffect } from 'react';
import escapeStringRegexp from 'escape-string-regexp';
import RandExp from 'randexp';

import { PasswordContextData, PasswordProviderProps, GenerateData } from './types';

function saveOption(option: string, value: boolean | string | number, initial: {}) {
	const updatedAt = new Date();

	const storageName = 'password-generator';
	const storage = window.localStorage.getItem(storageName);

	const data = storage ? JSON.parse(storage) : initial;

	const updatedData = {
		...data, ...{
			[option]: value,
			updatedAt: updatedAt.toISOString()
		}
	};

	const updatedDataJSON = JSON.stringify(updatedData);

	window.localStorage.setItem(storageName, updatedDataJSON);
}

function generate(data: GenerateData, length: number) {
	const {
		custom,
		customContent,
		letters,
		uppercase,
		numbers,
		special
	} = data;

	if (custom && customContent.length > 0) {
		const escaped = escapeStringRegexp(customContent);

		const regexp = new RegExp(`[${escaped}]{${length}}`);

		const randexp = new RandExp(regexp);

		const gen = randexp.gen();

		return gen;
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

	const regexp = new RegExp(`[${content}]{${length}}`);

	const randexp = new RandExp(regexp);

	const gen = randexp.gen();

	return gen;
}

export const PasswordContext = createContext({} as PasswordContextData);

export function PasswordProvider({ children }: PasswordProviderProps) {
	const [theme, setTheme] = useState('');

	const [letters, setLetters] = useState(true);
	const [uppercase, setUppercase] = useState(true);
	const [numbers, setNumbers] = useState(true);
	const [special, setSpecial] = useState(true);
	const [custom, setCustom] = useState(false);
	const [customContent, setCustomContent] = useState('');

	const [length, setLength] = useState(16);

	const [generated, setGenerated] = useState('');

	const initialData = {
		letters,
		uppercase,
		numbers,
		special,
		custom,
		customContent,
		length,
		theme: ''
	};

	useEffect(() => {
		const storageName = 'password-generator';
		const storage = window.localStorage.getItem(storageName);

		const data = storage ? JSON.parse(storage) : false;

		if (data) {
			const {
				letters,
				uppercase,
				numbers,
				special,
				custom,
				customContent,
				length,
				theme
			} = data;

			setLetters(letters);
			setUppercase(uppercase);
			setNumbers(numbers);
			setSpecial(special);
			setCustom(custom);
			setCustomContent(customContent);
			setLength(length);
			setTheme(theme);

			if (theme) {
				const body = document.querySelector('body');

				if (body) {
					body.classList.add(theme);
				}
			}
		}
	}, []);

	useEffect(() => {
		const password = generate({
			letters,
			uppercase,
			numbers,
			special,
			custom,
			customContent
		}, length);

		setGenerated(password);
	}, [letters, uppercase, numbers, special, custom, customContent, length]);

	function handleTheme(choose: string) {
		setTheme(choose);

		saveOption('theme', choose, initialData);

		const body = document.querySelector('body');

		if (body) {
			if (choose) {
				body.classList.add(choose);
			} else {
				body.removeAttribute('class');
			}
		}
	}

	function toggleLetters(enable: boolean) {
		toggleCustom(false, false);
		handleCustomContent('');

		setLetters(enable);

		saveOption('letters', enable, initialData);
	}

	function toggleUppercase(enable: boolean) {
		toggleCustom(false, false);
		handleCustomContent('');

		setUppercase(enable);

		saveOption('uppercase', enable, initialData);
	}

	function toggleNumbers(enable: boolean) {
		toggleCustom(false, false);
		handleCustomContent('');

		setNumbers(enable);

		saveOption('numbers', enable, initialData);
	}

	function toggleSpecial(enable: boolean) {
		toggleCustom(false, false);
		handleCustomContent('');

		setSpecial(enable);

		saveOption('special', enable, initialData);
	}

	function toggleCustom(enable: boolean, disable: boolean = true) {
		if (disable) {
			toggleLetters(false);
			toggleUppercase(false);
			toggleNumbers(false);
			toggleSpecial(false);
		}

		setCustom(enable);
		saveOption('custom', enable, initialData);
	}

	function handleCustomContent(value: string) {
		setCustomContent(value);

		saveOption('customContent', value, initialData);
	}

	function handleLength(value: number) {
		setLength(value);

		saveOption('length', value, initialData);
	}

	function hasGenerated() {
		return generated.length > 0;
	}

	function isAbleToGenerate() {
		return letters || uppercase || numbers || special || (custom && customContent.length > 0);
	}

	function handleGenerate() {
		const password = generate({
			letters,
			uppercase,
			numbers,
			special,
			custom,
			customContent
		}, length);

		setGenerated(password);
	}

	return (
		<PasswordContext.Provider value={{
			theme,
			letters,
			uppercase,
			numbers,
			special,
			custom,
			customContent,
			length,
			generated,
			handleTheme,
			toggleLetters,
			toggleUppercase,
			toggleNumbers,
			toggleSpecial,
			toggleCustom,
			handleCustomContent,
			handleLength,
			hasGenerated,
			isAbleToGenerate,
			handleGenerate,
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