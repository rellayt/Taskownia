import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';
import { background, color, fontSize } from '../../../assets/styles/utility';

const borderRadius = css`
	border-radius: 6px 6px 0 0;
`;

export const Wrapper = styled(TextField)`
	.MuiFilledInput-root {
		${borderRadius};
	}

	.css-cio0x1-MuiInputBase-root-MuiFilledInput-root:after {
		border-bottom: 2px solid ${({ theme: { colors } }) => colors.darkBlue};
	}
	.css-cio0x1-MuiInputBase-root-MuiFilledInput-root.Mui-error:after {
		border-bottom: 2px solid ${({ theme: { colors } }) => colors.error};
	}

	.css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
		${color('darkBlue')}
	}

	.css-e4w4as-MuiFormLabel-root-MuiInputLabel-root {
		${fontSize('xm')};
	}
	.css-au3a9q-MuiFormLabel-root-MuiInputLabel-root.Mui-error {
		${color('error')}
	}

	.css-10botns-MuiInputBase-input-MuiFilledInput-input {
		${fontSize('xm')};
		${background('inputFill')}
		box-shadow: inset 0 0 4px 0 rgb(181 191 199 / 32%);
		${borderRadius};
	}
	.css-1wc848c-MuiFormHelperText-root.Mui-error {
		${color('error')}
		${fontSize('s')};
		margin-left: 4px;
	}
`;
