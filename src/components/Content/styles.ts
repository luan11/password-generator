import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto 2rem;
	padding: 6rem 1rem;

	@media (min-width: 576px) {
		width: 540px;
	}

	@media (min-width: 768px) {
		width: 720px;
	}

	@media (min-width: 992px) {
		width: 960px;
		height: calc(100vh - 80px);
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		column-gap: 2rem;
		margin-bottom: 0;
		align-items: flex-start;
	}

	@media (min-width: 1140px) {
		width: 1140px;
	}

	@media (min-width: 1320px) {
		width: 1320px;
	}

	>div {
		background: var(--container);
		padding: 2rem 4rem;
		border-radius: 4px;
		box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.15);
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		>h2 {
			width: 100%;
			color: var(--heading);
			border-bottom: 1px solid var(--heading);
			padding-bottom: 1.5rem;
			margin-bottom: 1.5rem;
		}
	}
`;
