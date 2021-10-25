import React from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import routes from 'configuration/routing/routes';
import { SingleRoute } from 'core/base/models/router.model';
import AppRoute from 'configuration/routing/AppRoute';
import Home from './Home';

const DEFAULT_UNAUTHENTICATED_PATH = '/home';

const UnauthenticatedApp = (): React.ReactElement => {
	console.log('unauth');
	return (
		<MainTemplate>
			<Switch>
				{routes.unauthenticated.map((singleRoute: SingleRoute, index) => (
					// <AppRoute
					// 	singleRoute={
					// 		singleRoute
					// 	}
					// 	key={index}
					// />
					<Route path={singleRoute.path} component={singleRoute.component} key={index} />
				))}
				<Redirect exact from="/" to={DEFAULT_UNAUTHENTICATED_PATH} />
				<Redirect from="/*" to={DEFAULT_UNAUTHENTICATED_PATH} />
			</Switch>
		</MainTemplate>
	);
};

export default UnauthenticatedApp;
