import { MouseEvent, MouseEventHandler, ReactElement } from 'react';
import { ChildrenProps } from '../../../core/base/types/children.props';
import { LinkStyledProps, Wrapper } from './Link.styles';
import { isNotUndefined } from '../../../core/base/utility/isNotUndefined';
import { useRouter } from '../../../hooks/useRouter';
import { asNonUndefined } from '../../../core/base/utility/asNonUndefined';

interface LinkProps extends ChildrenProps, LinkStyledProps {
	navigateTo: string;
	onClick?: MouseEventHandler;
}
const Link = ({ color, size, navigateTo, onClick, children }: LinkProps): ReactElement => {
	const router = useRouter();

	const handleButtonClick = (event: MouseEvent) => {
		router.push(navigateTo);
		if (isNotUndefined(onClick)) {
			asNonUndefined(onClick)(event);
		}
	};
	return (
		<Wrapper tabIndex={1} color={color} size={size} onClick={handleButtonClick}>
			{children}
		</Wrapper>
	);
};

export default Link;
