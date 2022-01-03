import { ReactElement } from 'react';
import { AuthorName, Date, Title, Wrapper } from './ProjectCard.styles';
import Moment from 'react-moment';
import { isToday } from '../../../helpers/is-today';
import { useRouter } from '../../../hooks/useRouter';
import { RoutePath } from '../../../configuration/routing/static-routes';
import { ProjectStatus } from '../../../models/Project.model';
import { not } from '../../../core/base/utility/not';

interface ProjectCardProps {
	title: string;
	id: number;
	authorName: string;
	projectStatus: ProjectStatus;
	createdAt: Date;
}

const ProjectCard = ({ id, title, authorName, projectStatus, createdAt }: ProjectCardProps): ReactElement => {
	const isActive = projectStatus !== ProjectStatus.NEW;

	const router = useRouter();

	const handleClick = () => {
		if (not(isActive)) {
			router.push(`${RoutePath.PROJECT_DETAILS}/${id}`);
		}
	};

	return (
		<Wrapper onClick={handleClick} isDisabled={isActive}>
			<Title>{title}</Title>
			<AuthorName>{authorName}</AuthorName>
			<Date>
				{isToday(createdAt) && 'dzisiaj o '}
				<Moment format={isToday(createdAt) ? 'HH:mm' : 'DD/MM/YY HH:mm'}>{createdAt}</Moment>
			</Date>
		</Wrapper>
	);
};

export default ProjectCard;
