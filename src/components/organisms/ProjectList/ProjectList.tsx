import { ReactElement } from 'react';
import { Project } from '../../../models/Project.model';
import { Wrapper } from './ProjectList.styles';
import ProjectCard from '../../molecules/Project/ProjectCard';

interface ProjectListProps {
	projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps): ReactElement => {
	return (
		<Wrapper>
			{projects.map(({ id, title, authorUsername, projectStatus, createdAt }) => (
				<ProjectCard key={id} id={id} title={title} projectStatus={projectStatus} authorName={authorUsername} createdAt={createdAt} />
			))}
		</Wrapper>
	);
};

export default ProjectList;
