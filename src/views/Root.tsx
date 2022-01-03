import React, { useCallback, useContext } from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useAuth } from '../hooks/useAuth';
import { StyledBackdrop } from '../components/templates/Backdrop/Backdrop.styles';
import { GlobalLogoWrapper } from './Root.styles';
import { ReactComponent as SvgLogo } from '../assets/icons/logo.svg';
import useEffectOnce from '../helpers/use-effect-once';
import { isFalseValue } from '../core/base/utility/isFalseValue';
import { snackbarContext } from '../core/providers/Snackbar.provider';
import { openSnackbar } from '../core/store/actions/snackbar.actions';
import { AUTHENTICATE_ERROR } from '../configuration/constans/snackbar-messages';

const Root = () => {
	const { snackbarDispatch } = useContext(snackbarContext);

	const { isAuthenticated, isPageLoading, facade } = useAuth();

	const afterErrorHandler = () => openSnackbar(snackbarDispatch, AUTHENTICATE_ERROR);

	const authenticateIfCan = useCallback(async () => await facade.authenticateIfCan(afterErrorHandler), [facade]);

	useEffectOnce(() => {
		setTimeout(() => authenticateIfCan().then(), 900);
	});

	return (
		<>
			{isPageLoading && (
				<StyledBackdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isPageLoading}>
					<GlobalLogoWrapper>
						<SvgLogo />
					</GlobalLogoWrapper>
				</StyledBackdrop>
			)}
			{isFalseValue(isPageLoading) && <>{isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />} </>}
		</>
	);
};

export default Root;
