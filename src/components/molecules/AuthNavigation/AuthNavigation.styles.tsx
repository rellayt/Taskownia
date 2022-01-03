import styled from 'styled-components';
import { flexAlignAndJustifyCenter, MEDIA_WIDTH_LG, MEDIA_WIDTH_MD, selectFontSize } from '../../../assets/styles/utility';

export const Wrapper = styled.div`
	${flexAlignAndJustifyCenter};
	gap: 24px;
	margin-bottom: -4px;
	a {
		${selectFontSize('xm')}
		font-weight: 500;
	}
	div:last-child {
		margin-left: 16px;
		margin-top: -2px;
	}

	@media (max-width: ${MEDIA_WIDTH_LG}) {
		gap: 12px;
	}

	@media (max-width: ${MEDIA_WIDTH_MD}) {
		div:last-child {
			margin-left: 4px;
		}
	}
`;
