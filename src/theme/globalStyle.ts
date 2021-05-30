import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--acqua-green: #19A6A5;
		--light-green: #A8FE75;

		--body: #1d2227;

		--container: #1a1e21;

		--heading: #C2C2C2;
		--text: #D9D9D9;
	}

	body {
		font-family: 'Ubuntu Mono', monospace;
		background: var(--body);
	}

	input,
	textarea,
	select {
		font-family: 'Ubuntu Mono', monospace;
	}
`;

export default GlobalStyle;