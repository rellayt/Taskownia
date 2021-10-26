import styled from 'styled-components';
import { Optional } from 'core/base/types/optional.type';
import { selectiveColors } from 'assets/styles/theme';
import { Key } from 'core/base/types/key.type';
import { isUndefined } from 'core/base/utility/isUndefined';
import { asNonUndefined } from 'core/base/utility/asNonUndefined';
import { background, color as selectColor, flexJustifyCenter } from '../../../assets/styles/utility';

export interface ButtonStyledProps {
	fullWidth?: Optional<boolean>;
	rounded?: Optional<boolean>;
	processing?: Optional<boolean>;
	color?: Optional<Key<typeof selectiveColors>>;
}

export const Wrapper = styled.div<ButtonStyledProps>`
	width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

	.MuiButton-root {
		background: ${({ color }) => (isUndefined(color) ? selectiveColors.blue.normal : selectiveColors[asNonUndefined(color)].normal)};
		text-transform: none;
		font-size: ${({ theme: { fontSizes } }) => fontSizes.m};
		padding: 4px 18px;
		font-weight: 700;
		${({ color }) => selectColor(isUndefined(color) ? 'white' : 'black')};
		transition: cubic-bezier(0.4, 0.07, 0.43, 1.01) all 325ms;
		box-shadow: 0 1px 2px -1px ${({ theme: { colors } }) => colors.darkGray};
		border-radius: ${({ rounded }) => (rounded ? '25px' : '6px')};
		width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

		&:hover {
			background: ${({ color }) => (isUndefined(color) ? selectiveColors.blue.dark : selectiveColors[asNonUndefined(color)].dark)};
		}

		&:focus {
			background: ${({ color }) => (isUndefined(color) ? selectiveColors.blue.light : selectiveColors[asNonUndefined(color)].light)};
		}

		&:disabled div {
			${flexJustifyCenter};
		}

		&:disabled {
			${background('error')};
			${selectColor('white')};
		}

		.MuiButton-root:hover.Mui-disabled {
			${background('error')};
		}
	}
`;
