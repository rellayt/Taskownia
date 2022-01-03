import React from 'react';
import { ChildrenProps } from 'core/base/types/children.props';
import { Header, InnerWrapper, Wrapper } from './FeatureBaseTemplate.styles';

interface FeatureBaseTemplateProps extends ChildrenProps {
	headerContent: string;
}

const FeatureBaseTemplate = ({ headerContent, children }: FeatureBaseTemplateProps) => {
	return (
		<Wrapper>
			<Header>{headerContent}</Header>
			<InnerWrapper>{children}</InnerWrapper>
		</Wrapper>
	);
};

export default FeatureBaseTemplate;
