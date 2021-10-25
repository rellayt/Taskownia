import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from 'views/Root.styles';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import routes from 'configuration/routing/routes';
import AppRoute from 'configuration/routing/AppRoute';
import { SingleRoute } from 'core/base/models/router.model';

const DEFAULT_AUTHENTICATED_PATH = '/dashboard';

const AuthenticatedApp = (): React.ReactElement => {
	return (
		<MainTemplate>
			<Wrapper>
				<Router>
					<Switch>
						{routes.authenticated.map(
							(
								singleRoute: SingleRoute,
								index
							) => (
								<AppRoute
									singleRoute={
										singleRoute
									}
									key={
										index
									}
								/>
							)
						)}
						<Route exact path="/">
							<Redirect
								to={
									DEFAULT_AUTHENTICATED_PATH
								}
							/>
						</Route>
						<Route path="*">
							<Redirect
								to={
									DEFAULT_AUTHENTICATED_PATH
								}
							/>
						</Route>
					</Switch>
				</Router>
			</Wrapper>
		</MainTemplate>
	);
};

export default AuthenticatedApp;
