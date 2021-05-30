import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:root {
		--acqua-green: #19A6A5;
		--acqua-green-dark: #283038;
		--light-green: #A8FE75;

		--body: #1d2227;

		--container: #1a1e21;

		--heading: #C2C2C2;
		--text: #D9D9D9;
	}

	body {
		font-family: 'Ubuntu Mono', monospace;
		background: var(--body);

		&.light {
			--acqua-green: #2c6f6e;
			--acqua-green-dark: #DEDEDE;
			--light-green: #19A6A5;

			--body: #FAFAFA;

			--container: #F0F0F0;

			--heading: #1a1e21;
			--text: #1d2227;
		}
	}

	button,
	input,
	textarea,
	select {
		font-family: 'Ubuntu Mono', monospace;
	}

	.hidden {
		display: none;
	}
`;

export default GlobalStyle;