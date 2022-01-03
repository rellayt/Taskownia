import styled from 'styled-components';
import { initialAnimation, MEDIA_WIDTH_LG, MEDIA_WIDTH_MD, selectBackground } from '../assets/styles/utility';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 550px;
	box-shadow: ${({ theme: { boxShadows } }) => boxShadows.projectDetails};
	${selectBackground('white')}
	border-radius: 10px;
	margin: 24px 0 36px;
	${initialAnimation};

	@media (max-width: ${MEDIA_WIDTH_LG}) {
		margin: 12px 0 24px;
	}
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		margin: 12px 0 24px;
	}
`;

export const Header = styled.div``;
