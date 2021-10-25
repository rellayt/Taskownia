import { SingleRoute } from 'core/base/models/router.model';
import Dashboard from 'views/Dashboard';
import Profile from 'views/Profile';
import ProfileEdit from 'views/ProfileEdit';
import ProjectDetails from 'views/ProjectDetails';

export const authenticatedRoutes: SingleRoute[] = [
	{
		path: '/dashboard',
		component: Dashboard,
	},
	{
		path: '/profile',
		component: Profile,
	},
	{
		path: '/profile-edit',
		component: ProfileEdit,
	},
	{
		path: '/project-details',
		component: ProjectDetails,
	},
];
