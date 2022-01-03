import styled from 'styled-components';
import { MEDIA_WIDTH_MD, selectBackground, selectFontSize } from '../assets/styles/utility';
import { initialAnimation } from './Home.styles';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50px 50px 70px 1fr;
	${selectBackground('white')}
	box-shadow: ${({ theme: { boxShadows } }) => `${boxShadows.projectDetails}, inset 0 1px 35px -15px rgb(0 0 0 / 2%)`};
	border-radius: 24px;
	border: solid 1px rgb(0 0 0 / 8%);
	margin-top: 24px;
	margin-bottom: 16px;
	gap: 8px;
	column-gap: 16px;
	padding: 48px;
	${initialAnimation};

	@media (max-width: ${MEDIA_WIDTH_MD}) {
		grid-template-columns: 100%;
		padding: 36px 24px;
	}
`;

export const Name = styled.div`
	grid-column: 1/3;
	align-self: flex-start;
	font-weight: 600;
	${selectFontSize('xxl')};
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		grid-column: 1/2;
		align-self: center;
		justify-self: center;
	}
`;

export const Email = styled.div`
	grid-column: 1/3;
	align-self: flex-start;
	${selectFontSize('l')};
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		grid-column: 1/2;
		align-self: center;
		justify-self: center;
	}
`;

export const Date = styled.div`
	${selectFontSize('l')};
	display: flex;
	align-self: center;
	justify-self: center;

	& > * {
		margin: 0 8px;
	}
`;

export const DataWrapper = styled.div`
	${selectFontSize('l')};
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 90px 50px 50px;
	& > * {
		align-self: center;
	}
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		& > * {
			justify-self: center;
		}
	}
`;

export const Header = styled.div`
	font-weight: 600;
	grid-column: 1/3;
	justify-self: center;
	align-self: center;
`;

export const Field = styled.div``;
