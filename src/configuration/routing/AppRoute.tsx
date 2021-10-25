import React from 'react';
import { Route } from 'react-router-dom';
import { SingleRoute } from 'core/base/models/router.model';

type AppRouteProps = { singleRoute: SingleRoute };

const AppRoute = ({ singleRoute: { path, component } }: AppRouteProps): React.ReactElement => {
	return <Route path={path} component={component} />;
};

export default AppRoute;
