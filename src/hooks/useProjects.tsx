import { useObservable } from '@mindspace-io/react';
import { Optional } from '../core/base/types/optional.type';
import { Project } from '../models/Project.model';
import { ProjectsFacade, projectsFacade as facade } from '../core/store/facades/projects.facade';
import { Nullable } from '../core/base/types/nullable.type';
import { ProjectVisibilityFilter } from '../core/store/models/Projects.model';

export type ProjectsHook = {
	totalPages: Optional<number>;
	currentPage: Optional<number>;
	filter: Optional<ProjectVisibilityFilter>;
	filteredProjects: Optional<Project[]>;
	detailedProject: Optional<Nullable<Project>>;
	isProcessing: Optional<boolean>;
	facade: ProjectsFacade;
};

export const useProjects = (): ProjectsHook => {
	const [totalPages] = useObservable<number>(facade.totalPages$, 0);

	const [filter] = useObservable<ProjectVisibilityFilter>(facade.filter$, ProjectVisibilityFilter.SHOW_ALL);

	const [currentPage] = useObservable<number>(facade.currentPage$, 1);

	const [filteredProjects] = useObservable<Project[]>(facade.filteredProjects$, []);

	const [detailedProject] = useObservable<Nullable<Project>>(facade.detailedProject$, null);

	const [isProcessing] = useObservable<boolean>(facade.isProcessing$, false);

	return { totalPages, filter, filteredProjects, isProcessing, currentPage, detailedProject, facade };
};
