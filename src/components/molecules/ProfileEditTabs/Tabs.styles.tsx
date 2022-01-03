import styled from 'styled-components';
import { MEDIA_WIDTH_MD, selectBackground, selectColor } from '../../../assets/styles/utility';

export const Wrapper = styled.div`
	${selectBackground('white')}
	border-radius: 10px 10px 0 0;
	border-bottom: ${({ theme: { colors } }) => colors.lightGray} 2px solid;
	box-shadow: 0 10px 35px -15px rgb(0 0 0 / 10%);

	button:first-child {
		border-radius: 10px 0 0 0;
	}

	button:last-child {
		border-radius: 0 10px 0 0;
	}

	button {
		${selectBackground('white')}
		width: 25%;
		padding: 12px;

		@media (max-width: ${MEDIA_WIDTH_MD}) {
			width: 100%;
			margin: 0 auto;
			&:first-child,
			&:last-child {
				border-radius: 0;
			}
		}
	}

	.css-1h9z7r5-MuiButtonBase-root-MuiTab-root.Mui-selected {
		${selectColor('blue')};
	}

	.css-heg063-MuiTabs-flexContainer {
		justify-content: center;
	}

	.css-1aquho2-MuiTabs-indicator {
		height: 3px;
		${selectBackground('blue')};
	}
`;
