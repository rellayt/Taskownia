import React, { ReactElement } from 'react';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { Redirect, Route } from 'react-router-dom';
import routes from 'configuration/routing/routes';
import { SingleRoute } from 'core/base/models/router.model';
import { Switch } from '../configuration/routing/Switch.styles';

const DEFAULT_UNAUTHENTICATED_PATH = '/home';

const UnauthenticatedApp = (): ReactElement => {
	return (
		<MainTemplate>
			<Switch atEnter={{ opacity: 0 }} atLeave={{ opacity: 0 }} atActive={{ opacity: 1 }}>
				{routes.unauthenticated.map((singleRoute: SingleRoute, index) => (
					<Route path={singleRoute.path} component={singleRoute.component} key={index} />
				))}
				<Redirect exact from="/" to={DEFAULT_UNAUTHENTICATED_PATH} />
				<Redirect from="/*" to={DEFAULT_UNAUTHENTICATED_PATH} />
			</Switch>
		</MainTemplate>
	);
};

export default UnauthenticatedApp;
