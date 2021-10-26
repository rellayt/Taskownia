import styled from 'styled-components';
import { flexAlignAndJustifyCenter, flexColAlignAndJustifyCenter } from 'assets/styles/utility';

export const Wrapper = styled.div`
	height: 100%;
	grid-row: 2/3;
	margin: 7vh 15px;
	${flexAlignAndJustifyCenter};
`;

export const InnerWrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 50px 1fr 90px;

	div:last-child {
		align-self: center;
		width: 100%;
	}
`;

export const TextFieldsWrapper = styled.div`
	grid-row: 2/3;
	//width: 100%;
	${flexColAlignAndJustifyCenter};

	& > * {
		margin: 8px 0;
		width: 100%;
	}
`;

export const Header = styled.header`
	font-weight: 600;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
	grid-row: 1/2;
`;
