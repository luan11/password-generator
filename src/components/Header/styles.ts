import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	padding: 1rem;
	background: var(--container);
	display: flex;
	justify-content: space-around;
	align-items: center;

	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	letter-spacing: 0.15rem;
	text-align: center;
	color: var(--light-green);
	margin: 0;
	line-height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 480px) {
		font-size: 1.35rem;
		margin-bottom: 1rem;
	}

	>span {
		display: inline-block;
		color: var(--acqua-green);
		margin-left: 0.25rem;
	}
`;

export const Choose = styled.div`
	margin-left: 1rem;
`;

export const Button = styled.button`
	background: transparent;
	border: 0;
	padding: 0;
	font-size: 2rem;
	color: var(--text);
	cursor: pointer;
	transition: all .35s;
	line-height: 100%;

	&:hover {
		color: var(--light-green);
	}
`;

export const A = styled.a`
	background: transparent;
	border: 0;
	padding: 0;
	font-size: 2rem;
	color: var(--text);
	cursor: pointer;
	transition: all .35s;
	line-height: 100%;
	color: var(--light-green);
	margin-left: 1rem;

	&:hover {
		color: var(--acqua-green);
	}
`;