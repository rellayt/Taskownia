import { ReactElement, ReactNode } from 'react';
import { ChildrenProps } from 'core/base/types/children.props';
import { Wrapper } from './TextField.styles';

interface TextFieldProps extends ChildrenProps {
	[property: string]: ReactNode;
}

const TextField = ({ children, ...props }: TextFieldProps): ReactElement => (
	<Wrapper variant="filled" {...props}>
		{children}
	</Wrapper>
);

export default TextField;
