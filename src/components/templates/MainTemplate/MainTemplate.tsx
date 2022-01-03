import React from 'react';
import { InnerWrapper, Wrapper } from './MainTemplate.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import { ChildrenProps } from 'core/base/types/children.props';

const MainTemplate = ({ children }: ChildrenProps) => (
	<Wrapper>
		<Navigation />
		<InnerWrapper>{children}</InnerWrapper>
	</Wrapper>
);

export default MainTemplate;
