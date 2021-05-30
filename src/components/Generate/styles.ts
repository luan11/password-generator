import styled from 'styled-components';

export const H4 = styled.h4`
	color: var(--text);
	margin-bottom: 1rem;

	>span {
		color: var(--light-green);
	}

	+ div {
		width: 100%;
	}
`;

export const Group = styled.div`
	position: relative;
	width: 100%;
	margin: 2rem 0;

	>button {
		position: absolute;
		right: 0;
		bottom: 0;
	}
`;

export const Input = styled.input`
	display: block;
	width: 100%;
	margin-top: 0.5rem;
	border: 1px solid var(--acqua-green-dark);
	color: var(--text);
	padding: 0.75rem 1rem;
	border-radius: 4px;
	background: var(--body);
	font-size: 1rem;
	transition: all .35s;
	outline: none;

	&:not(:placeholder-shown) {
		border-color: var(--light-green);
	}

	&:read-only {
		cursor: default;
	}
`;

export const Button = styled.button`
	color: var(--acqua-green-dark);
	padding: 0.75rem 1rem;
	background: var(--light-green);
	border: 1px solid var(--light-green);
	border-radius: 4px;
	line-height: 100%;
	font-size: 1rem;
	cursor: pointer;
	font-weight: 700;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
	transition: all .45s;

	&:hover {
		background-color: var(--acqua-green);
		border-color: var(--acqua-green);
	}

	>span {
		display: inline-block;
		margin-left: 0.5rem;
	}

	&:disabled {
		color: var(--text);
		background: var(--acqua-green-dark);
		border-color: var(--acqua-green-dark);
		cursor: default;
	}
`;