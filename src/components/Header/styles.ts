import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	padding: 1rem 0;
	background: var(--container);
`;

export const Title = styled.h1`
	letter-spacing: 0.15rem;
	text-align: center;
	color: var(--light-green);
	margin: 0;
	line-height: 150%;
	display: flex;
	justify-content: center;
	align-items: center;

	>span {
		display: inline-block;
		color: var(--acqua-green);
		margin-left: 0.5rem;
	}
`;