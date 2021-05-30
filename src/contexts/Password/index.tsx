import { createContext, useState, useContext, useEffect } from 'react';
import escapeStringRegexp from 'escape-string-regexp';
import RandExp from 'randexp';

import { PasswordContextData, PasswordProviderProps } from './types';

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

	function handleTheme(choose: string) {
		setTheme(choose);

		saveOption('theme', choose);

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
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
			saveOption('customContent', '');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setLetters(enable);

		saveOption('letters', enable);
	}

	function toggleUppercase(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
			saveOption('customContent', '');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setUppercase(enable);

		saveOption('uppercase', enable);
	}

	function toggleNumbers(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
			saveOption('customContent', '');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setNumbers(enable);

		saveOption('numbers', enable);
	}

	function toggleSpecial(enable: boolean) {
		setCustom(false);

		if (customContent !== '') {
			setCustomContent('');
			saveOption('customContent', '');
		}

		if (generated !== '') {
			setGenerated('');
		}

		setSpecial(enable);

		saveOption('special', enable);
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

		saveOption('custom', enable);
	}

	function handleCustomContent(value: string) {
		setCustomContent(value);

		saveOption('customContent', value);
	}

	function handleLength(value: number) {
		setLength(value);

		saveOption('length', value);

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

	function saveOption(option: string, value: boolean | string | number) {
		const updatedAt = new Date();

		const storageName = 'password-generator';
		const storage = window.localStorage.getItem(storageName);

		const data = storage ? JSON.parse(storage) : {
			letters,
			uppercase,
			numbers,
			special,
			custom,
			customContent,
			length,
			theme: ''
		};

		const updatedData = {
			...data, ...{
				[option]: value,
				updatedAt: updatedAt.toISOString()
			}
		};

		const updatedDataJSON = JSON.stringify(updatedData);

		window.localStorage.setItem(storageName, updatedDataJSON);
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