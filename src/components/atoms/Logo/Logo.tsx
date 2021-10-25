import React, { ReactElement } from 'react';
import { ReactComponent as SvgLogo } from 'assets/icons/logo.svg';
import { Wrapper } from './Logo.styles';

const Logo = (): ReactElement => (
	<Wrapper>
		<SvgLogo />
	</Wrapper>
);

export default Logo;
