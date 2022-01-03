import { ReactElement, useContext, useEffect } from 'react';
import { Author, Date, Description, BaseTitle, Status, Title, Wrapper, Action } from './ProjectDetails.styles';
import { useParams } from 'react-router-dom';
import FeatureBaseTemplate from '../components/templates/FeatureBaseTemplate/FeatureBaseTemplate';
import { useProjects } from '../hooks/useProjects';
import useAsyncEffectOnce from '../helpers/use-async-effect-once';
import { parseToNumber } from '../helpers/parse-to-number';
import { ProjectStatus } from '../models/Project.model';
import { isToday } from '../helpers/is-today';
import Moment from 'react-moment';
import { useAuth } from '../hooks/useAuth';
import Button from '../components/atoms/Button/Button';
import { isFalseValue } from '../core/base/utility/isFalseValue';
import { openSnackbar } from '../core/store/actions/snackbar.actions';
import { TAKE_PROJECT_ERROR, TAKE_PROJECT_SUCCESS } from '../configuration/constans/snackbar-messages';
import { snackbarContext } from '../core/providers/Snackbar.provider';
import { useRouter } from '../hooks/useRouter';
import { RoutePath } from '../configuration/routing/static-routes';

const ProjectDetails = (): ReactElement => {
	const router = useRouter();

	const { id } = useParams<{ id: string }>();

	const { detailedProject, isProcessing, facade } = useProjects();

	const { isAuthor } = useAuth();

	const { snackbarDispatch } = useContext(snackbarContext);

	useAsyncEffectOnce(async () => {
		facade.getProjectById(parseToNumber(id)).then();
	});

	const renderStatus = (status: ProjectStatus) => {
		switch (status) {
			case ProjectStatus.NEW:
				return 'Wolny';
			case ProjectStatus.IN_PROGRESS:
				return 'W trakcie';
			case ProjectStatus.FINISHED:
				return 'Zakończony';
		}
	};

	const afterSuccessHandler = () => {
		openSnackbar(snackbarDispatch, TAKE_PROJECT_SUCCESS);
		router.push(RoutePath.DASHBOARD);
	};

	const afterErrorHandler = () => openSnackbar(snackbarDispatch, TAKE_PROJECT_ERROR);

	const handleTakeProject = async () => {
		await facade.takeProject(id, afterSuccessHandler, afterErrorHandler);
	};

	useEffect(() => {
		return () => facade.resetDetailedProject();
	}, []);

	return (
		<FeatureBaseTemplate headerContent={'Szczegóły projektu'}>
			{detailedProject && (
				<Wrapper>
					<Title>{detailedProject.title}</Title>
					<Description>
						<BaseTitle>Opis</BaseTitle>
						{detailedProject.description}
					</Description>
					<Author>
						<BaseTitle>Zleceniodawca</BaseTitle>
						{detailedProject.authorUsername}
					</Author>
					<Status>
						<BaseTitle>Status</BaseTitle>
						{renderStatus(detailedProject.projectStatus)}
					</Status>
					<Date>
						<BaseTitle>Dodano</BaseTitle>
						<div>
							{isToday(detailedProject.createdAt) && 'Dzisiaj o '}
							<Moment format={isToday(detailedProject.createdAt) ? 'HH:mm' : 'DD/MM/YY HH:mm'}>{detailedProject.createdAt}</Moment>
						</div>
					</Date>
					{isFalseValue(isAuthor) && detailedProject.projectStatus === ProjectStatus.NEW && (
						<Action>
							<Button fullWidth processing={isProcessing} onClick={handleTakeProject}>
								Przejmij zlecenie
							</Button>
						</Action>
					)}
				</Wrapper>
			)}
		</FeatureBaseTemplate>
	);
};

export default ProjectDetails;
