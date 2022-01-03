import React, { ReactElement, useContext } from 'react';
import { Wrapper } from './CreateProject.styles';
import FeatureBaseTemplate from '../components/templates/FeatureBaseTemplate/FeatureBaseTemplate';
import CreateProjectForm from '../components/organisms/CreateProjectForm/CreateProjectForm';
import { snackbarContext } from '../core/providers/Snackbar.provider';
import { openSnackbar } from '../core/store/actions/snackbar.actions';
import { useProjects } from '../hooks/useProjects';
import { useRouter } from '../hooks/useRouter';
import { STANDARD_ERROR, CREATE_PROJECT_SUCCESS } from '../configuration/constans/snackbar-messages';
import { RoutePath } from '../configuration/routing/static-routes';

export interface CreateProjectData {
	title: string;
	description: string;
}

const CreateProject = (): ReactElement => {
	const router = useRouter();

	const { isProcessing, facade } = useProjects();

	const { snackbarDispatch } = useContext(snackbarContext);

	const afterSuccessHandler = () => {
		openSnackbar(snackbarDispatch, CREATE_PROJECT_SUCCESS);
		router.replace(RoutePath.DASHBOARD);
	};

	const afterErrorHandler = () => openSnackbar(snackbarDispatch, STANDARD_ERROR);

	const handleSubmit = async (projectData: CreateProjectData) => {
		await facade.createProject(projectData, afterSuccessHandler, afterErrorHandler);
	};
	return (
		<FeatureBaseTemplate headerContent={'Tworzenie projektu'}>
			<Wrapper>
				<CreateProjectForm handleSubmit={handleSubmit} isProcessing={isProcessing} />
			</Wrapper>
		</FeatureBaseTemplate>
	);
};

export default CreateProject;
