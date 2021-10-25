import React from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { Wrapper } from './Navigation.styles';
import Button from 'components/atoms/Button/Button';

const Navigation = () => {
	const onClick = () => {
		console.log('clicked from navigation');
	};
	return (
		<Wrapper>
			<Logo />
			<Button onClick={onClick} rounded navigateTo={'login'}>
				Zaloguj
			</Button>
		</Wrapper>
	);
};

export default Navigation;
