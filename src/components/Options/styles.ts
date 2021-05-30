import styled from 'styled-components';

export const Label = styled.label`
	width: 100%;
	color: var(--text);
	font-weight: 700;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
	flex-wrap: wrap;

	&:not(:last-child) {
		margin-bottom: 1rem;
	}

	>input[type="checkbox"] {
		display: none;

		&:checked {
			~ svg {
				color: var(--light-green);

				&:first-of-type {
					display: none;
				}

				&:last-of-type {
					display: block;
				}
			}	

			~ input[type="text"] {
				display: block;
			}
		}
	}

	>svg {
		margin-right: 0.75rem;
		font-size: 1.5rem;

		&:last-of-type {
			display: none;
		}
	}

	>input[type="text"] {
		display: none;
		width: 100%;
		margin-top: 0.5rem;
		border: 1px solid #283038;
		color: var(--text);
		padding: 0.75rem 1rem;
		border-radius: 4px;
		background: var(--body);
		font-size: 1rem;
		transition: all .35s;

		&:not(:placeholder-shown) {
			border-color: var(--light-green);
		}
	}
`;
