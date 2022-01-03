import styled from 'styled-components';
import { MEDIA_WIDTH_MD, MEDIA_WIDTH_XLG } from '../../../assets/styles/utility';

export const Wrapper = styled.div`
	display: grid;
	grid-template-rows: ${({ theme: { navbarHeight } }) => `${navbarHeight}`} 1fr;
	grid-template-columns: 100%;
`;

export const InnerWrapper = styled.div`
	width: 100%;
	min-height: calc(100vh - ${({ theme: { navbarHeight } }) => `${navbarHeight}`}) !important;
	height: auto;
	padding: 48px;

	@media (max-width: ${MEDIA_WIDTH_XLG}) {
		padding: 24px;
	}

	@media (max-width: ${MEDIA_WIDTH_MD}) {
		padding: 20px 12px 12px 12px;
	}
`;
