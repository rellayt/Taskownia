import styled from 'styled-components';
import { flexAlignAndJustifyCenter } from 'assets/styles/utility';

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
	grid-template-rows: 80px 1fr 1fr 90px;
`;

export const Header = styled.header`
	font-weight: 500;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
	grid-row: 1/2;
`;
