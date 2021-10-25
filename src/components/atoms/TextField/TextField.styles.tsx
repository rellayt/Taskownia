import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Wrapper = styled(TextField)`
	.css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after {
		border-bottom: 2px solid ${({ theme: { colors } }) => colors.darkBlue};
	}

	.css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
		color: ${({ theme: { colors } }) => colors.darkBlue};
	}

	.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
	}

	.css-10botns-MuiInputBase-input-MuiFilledInput-input {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.xm};
		background: ${({ theme: { colors } }) => colors.inputFill};
	}
`;
