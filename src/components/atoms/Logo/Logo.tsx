import React, { MouseEventHandler, ReactElement } from 'react';
import { ReactComponent as SvgLogo } from 'assets/icons/logo.svg';
import { Wrapper } from './Logo.styles';

interface LogoProps {
	onClick: MouseEventHandler<SVGSVGElement>;
}

const Logo = ({ onClick }: LogoProps): ReactElement => (
	<Wrapper>
		<SvgLogo onClick={onClick} />
	</Wrapper>
);

export default Logo;
