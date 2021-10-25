import React from 'react';
import { MouseEvent, MouseEventHandler, ReactElement } from 'react';
import { useRouter } from 'hooks/useRouter';
import { Optional } from 'core/base/types/optional.type';
import { ChildrenProps } from 'core/base/types/children.props';
import { isNotUndefined } from 'core/base/utility/isNotUndefined';
import { asNonUndefined } from 'core/base/utility/asNonUndefined';
import { ButtonStyledProps, Wrapper } from './Button.styles';
import { Button as MaterialButton } from '@mui/material';

interface ButtonProps extends ChildrenProps, ButtonStyledProps {
	disabled?: Optional<boolean>;
	navigateTo?: Optional<string>;
	onClick: MouseEventHandler;
}

const Button = ({ fullWidth, rounded, color, disabled, navigateTo, onClick, children }: ButtonProps): ReactElement => {
	const router = useRouter();
	const handleButtonClick = (event: MouseEvent) => {
		onClick(event);
		if (isNotUndefined(navigateTo)) {
			router.push(asNonUndefined(navigateTo));
		}
	};

	return (
		<Wrapper fullWidth={fullWidth} rounded={rounded} color={color}>
			<MaterialButton onClick={handleButtonClick} disabled={disabled}>
				{children}
			</MaterialButton>
		</Wrapper>
	);
};

export default Button;
