import React, { useContext, useEffect, useState } from 'react';
import Logo from 'components/atoms/Logo/Logo';
import { Wrapper } from './Navigation.styles';
import Button from 'components/atoms/Button/Button';
import { useAuth } from '../../../hooks/useAuth';
import { asNonUndefined } from '../../../core/base/utility/asNonUndefined';
import { isNotNil } from '../../../core/base/utility/isNotNill';
import { useRouter } from '../../../hooks/useRouter';
import AuthNavigation from '../../molecules/AuthNavigation/AuthNavigation';
import { snackbarContext } from '../../../core/providers/Snackbar.provider';
import { openSnackbar } from '../../../core/store/actions/snackbar.actions';
import { LOGOUT } from '../../../configuration/constans/snackbar-messages';
import { RoutePath } from '../../../configuration/routing/static-routes';

const Navigation = () => {
	const router = useRouter();

	const { snackbarDispatch } = useContext(snackbarContext);

	const [userFirstLetter, setUserFirstLetter] = useState('');

	const { isAuthenticated, user: userIfSet, isAuthor, facade } = useAuth();

	useEffect(() => {
		if (isNotNil(userIfSet)) {
			const { username } = asNonUndefined(userIfSet);
			const firstLetter = username.split('')[0];
			setUserFirstLetter(firstLetter.toUpperCase());
		}
	}, [userIfSet]);

	const handleLogoClick = () => {
		const path = isAuthenticated ? RoutePath.DASHBOARD : RoutePath.HOME;
		router.replace(path);
	};

	const logout = () => {
		setTimeout(() => {
			facade.logout();
			openSnackbar(snackbarDispatch, LOGOUT);
			router.push(RoutePath.HOME);
		}, 250);
	};

	return (
		<Wrapper>
			<Logo onClick={handleLogoClick} />
			{isAuthenticated && userIfSet ? (
				<AuthNavigation isAuthor={isAuthor as boolean} logout={logout} userFirstLetter={userFirstLetter} />
			) : (
				<Button color={'yellow'} rounded navigateTo={'login'}>
					Konto
				</Button>
			)}
		</Wrapper>
	);
};

export default Navigation;
