import styled from 'styled-components';
import { selectBackground, flexAlignCenter, MEDIA_WIDTH_LG, MEDIA_WIDTH_MD } from 'assets/styles/utility';

export const Wrapper = styled.div`
	padding: 0 80px;
	${selectBackground('white')};
	${flexAlignCenter};
	height: ${({ theme: { navbarHeight } }) => navbarHeight};
	justify-content: space-between;
	box-shadow: ${({
		theme: {
			boxShadows: { navbar },
		},
	}) => navbar};

	animation-fill-mode: forwards;
	animation-duration: 1100ms;
	animation-name: init;
	@keyframes init {
		from {
			transform: translateY(-15px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media (max-width: ${MEDIA_WIDTH_LG}) {
		padding: 0 24px;
	}

	@media (max-width: ${MEDIA_WIDTH_MD}) {
		padding: 0 12px;
	}
`;
