import { SingleRoute } from 'core/base/models/router.model';
import Dashboard from 'views/Dashboard';
import Profile from 'views/Profile';
import ProfileEdit from 'views/ProfileEdit';
import ProjectDetails from 'views/ProjectDetails';
import Chat from '../../views/Chat';
import { RoutePath } from './static-routes';
import CreateProject from '../../views/CreateProject';

export const authenticatedRoutes: SingleRoute[] = [
	{
		path: RoutePath.CHAT,
		component: Chat,
	},
	{
		path: RoutePath.DASHBOARD,
		component: Dashboard,
	},
	{
		path: RoutePath.PROFILE,
		component: Profile,
	},
	{
		path: RoutePath.CREATE_PROJECT,
		component: CreateProject,
	},
	{
		path: `${RoutePath.PROFILE_EDIT}/:id`,
		component: ProfileEdit,
	},
	{
		path: `${RoutePath.PROJECT_DETAILS}/:id`,
		component: ProjectDetails,
	},
];
