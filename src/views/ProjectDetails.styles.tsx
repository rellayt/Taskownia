import styled, { css } from 'styled-components';
import {
	flexColAlignAndJustifyCenter,
	flexJustifyEnd,
	initialAnimation,
	MEDIA_WIDTH_LG,
	MEDIA_WIDTH_MD,
	selectBackground,
	selectFontSize,
} from '../assets/styles/utility';

export const Wrapper = styled.div`
	${initialAnimation};
	display: grid;
	grid-template-rows: 80px 100px 200px 1fr;
	grid-template-columns: 33.33% 33.33% 33.33%;
	padding: 48px 72px 32px;
	box-shadow: ${({ theme: { boxShadows } }) => boxShadows.projectDetails};
	${selectBackground('white')}
	border-radius: 10px;
	margin: 16px 0;
	border: solid 1px rgb(0 0 0 / 8%);

	@media (max-width: ${MEDIA_WIDTH_LG}) {
		padding: 12px 48px;
	}
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		padding: 6px 24px;
		margin-bottom: 8px;
	}
	& > * {
		align-self: center;
	}
`;

const justify = css`
	justify-self: center;
	${flexColAlignAndJustifyCenter};
`;

export const Title = styled.div`
	${selectFontSize('xxl')};
	font-weight: 600;
	align-self: flex-start;
	margin: 0 -12px;
	grid-column: 1/4;
`;

export const Description = styled.div`
	${selectFontSize('m')};
	grid-column: 1/4;
	${flexColAlignAndJustifyCenter};

	&:nth-child(2) {
		text-align: center;
		margin: 0 7%;

		@media (max-width: ${MEDIA_WIDTH_MD}) {
			margin: 0 3%;
		}
	}
`;

export const BaseTitle = styled.div`
	${selectFontSize('xl')};
	display: flex;
	font-style: normal;
	margin-bottom: 16px;
	font-weight: normal;
`;

export const Author = styled.div`
	${selectFontSize('xl')};
	${justify};
`;

export const Status = styled.div`
	${justify};
`;

export const Date = styled.div`
	${justify};
`;

export const Action = styled.div`
	grid-column: 1/4;
	${flexJustifyEnd};
	margin: 0 10%;
	display: grid;
	grid-template-columns: 1fr 250px;

	div:first-child {
		grid-column: 2/3;
	}

	@media (max-width: ${MEDIA_WIDTH_MD}) {
		margin: 0 5%;
	}
`;
