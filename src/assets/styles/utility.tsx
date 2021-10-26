import { css } from 'styled-components';
import { ColorKey, FontSizeKey } from './style.types';

export const flexAlignCenter = css`
	display: flex;
	align-items: center;
`;

export const flexAlignAndJustifyCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const flexColAlignAndJustifyCenter = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const flexJustifyCenter = css`
	display: flex;
	justify-content: center;
`;

export const fontSize = (fontSizeKey: FontSizeKey) => css`
	font-size: ${({ theme: { fontSizes } }) => fontSizes[fontSizeKey]};
`;

export const background = (colorKey: ColorKey) => css`
	background: ${({ theme: { colors } }) => colors[colorKey]};
`;

export const color = (colorKey: ColorKey) => css`
	color: ${({ theme: { colors } }) => colors[colorKey]};
`;
