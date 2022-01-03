import styled from 'styled-components';
import { Box } from '@mui/material';
import { selectBackground, selectFontSize } from '../../../assets/styles/utility';

export const Wrapper = styled.div``;
export const StyledBox = styled(Box)`
	button {
		.MuiAvatar-root {
			${selectBackground('blue')};
			${selectFontSize('l')}
			transition: background 250ms ease-in;
			&:hover {
				${selectBackground('lightBlue')};
			}
		}
	}
`;
