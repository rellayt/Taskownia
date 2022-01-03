import React, { ReactElement } from 'react';
import { Wrapper } from './AuthNavigation.styles';
import Link from '../../atoms/Link/Link';
import StyledMenu from '../../atoms/Menu/Menu';
import { RoutePath } from '../../../configuration/routing/static-routes';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface AuthNavigationProps {
	logout: Function;
	isAuthor: boolean;
	userFirstLetter: string;
}

const AuthNavigation = ({ logout, isAuthor, userFirstLetter }: AuthNavigationProps): ReactElement => {
	const { width } = useWindowSize();

	return (
		<Wrapper>
			{isAuthor && (
				<>
					<Link color={'black'} size={'m'} navigateTo={RoutePath.CREATE_PROJECT}>
						{width && width < 768 ? 'SP' : 'Stwórz projekt'}
					</Link>
				</>
			)}
			<Link color={'black'} size={'m'} navigateTo={RoutePath.CHAT}>
				Czat
			</Link>
			<StyledMenu onLogout={logout}>{userFirstLetter}</StyledMenu>
		</Wrapper>
	);
};

export default AuthNavigation;
