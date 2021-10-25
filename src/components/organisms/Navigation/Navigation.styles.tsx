import styled from 'styled-components';
import { flexAlignCenter } from 'assets/styles/utility';

export const Wrapper = styled.div`
	padding: 0 80px;
	background-color: ${({ theme: { colors } }) => colors.white};
	height: ${({ theme: { navbarHeight } }) => navbarHeight};
	${flexAlignCenter};
	justify-content: space-between;
	box-shadow: ${({
		theme: {
			boxShadows: { navbar },
		},
	}) => navbar};
`;
