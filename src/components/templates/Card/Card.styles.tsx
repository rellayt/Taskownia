import styled from 'styled-components';
import { flexJustifyCenter } from 'assets/styles/utility';

export const Wrapper = styled.div`
	width: 500px;
	height: 500px;
	border-radius: 20px;
	padding: 42px 42px;
	${flexJustifyCenter};
	background: ${({ theme: { colors } }) => colors.white};
	box-shadow: ${({
		theme: {
			boxShadows: { card },
		},
	}) => card};
`;
