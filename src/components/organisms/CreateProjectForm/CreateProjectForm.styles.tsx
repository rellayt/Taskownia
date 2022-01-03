import styled from 'styled-components';
import { MEDIA_WIDTH_LG, MEDIA_WIDTH_MD } from '../../../assets/styles/utility';

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 110px 270px 200px;
	margin: 24px 0;
	padding: 0 20%;

	@media (max-width: ${MEDIA_WIDTH_LG}) {
		margin: 12px 0;
		padding: 0 10%;
		grid-template-rows: 100px 240px 120px;
	}
	@media (max-width: ${MEDIA_WIDTH_MD}) {
		margin: 6px 0;
		padding: 0 5%;
	}
`;
