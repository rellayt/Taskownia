import { MainRoutes } from 'core/base/models/router.model';
import { authenticatedRoutes } from './authenticated-routes';
import { unauthenticatedRoutes } from './unauthenticated-routes';

const routes: MainRoutes = {
	authenticated: authenticatedRoutes,
	unauthenticated: unauthenticatedRoutes,
};

export default routes;
