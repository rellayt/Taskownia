import { StoreManagement } from './store-management.abstract';
import { projectsQuery, ProjectsQuery, projectsStore, ProjectsStore } from '../state/projects.store';
import { projectsService, ProjectsService } from '../services/projects.service';
import { ProjectVisibilityFilter, ProjectsEntityState, ProjectsState } from '../models/Projects.model';
import { Project } from '../../../models/Project.model';
import { first } from 'rxjs';
import { CreateProjectData } from '../../../views/CreateProject';
import { RunnableFunction } from '../../base/types/runnable-function';

export class ProjectsFacade extends StoreManagement<ProjectsStore, ProjectsService, ProjectsQuery, ProjectsState, ProjectsEntityState> {
	readonly detailedProject$ = this.baseQuery.detailedProject$;

	readonly filteredProjects$ = this.baseQuery.filteredProjects$;

	readonly totalPages$ = this.baseQuery.totalPages$;

	readonly filter$ = this.baseQuery.filter$;

	readonly currentPage$ = this.baseQuery.currentPage$;

	readonly isProcessing$ = this.baseQuery.isProcessing$;

	async getProjects() {
		await this.baseAsyncHandler(async () => {
			const { data } = await this.baseService.getProjects();
			this.updateStateEntity<Project[]>('projects', ProjectsFacade.sortByDateDesc(ProjectsFacade.parseToProjectsWithDates(data)));
		});
	}

	async createProject(projectData: CreateProjectData, afterSuccessHandler: RunnableFunction, afterErrorHandler: RunnableFunction) {
		await this.baseAsyncHandler(async () => await this.baseService.createProject(projectData), afterSuccessHandler, afterErrorHandler);
	}

	async getProjectById(projectId: number) {
		await this.getProjects();
		this.filteredProjects$.pipe(first()).subscribe((projects: Project[]) => {
			const detailedProject = projects.find(({ id }) => id === projectId);
			this.updateStateEntity<Project>('detailedProject', detailedProject as Project);
		});
	}

	async takeProject(projectId: string, afterSuccessHandler: RunnableFunction, afterErrorHandler: RunnableFunction) {
		await this.baseAsyncHandler(async () => await this.baseService.takeProject(projectId), afterSuccessHandler, afterErrorHandler);
	}

	resetDetailedProject(): void {
		this.updateStateEntity<null>('detailedProject', null);
	}

	updateFilter(filter: ProjectVisibilityFilter): void {
		this.updateStateEntity<number>('currentPage', 1);
		this.updateStateEntity<ProjectVisibilityFilter>('filter', filter);
	}

	updateCurrentPage(currentPage: number): void {
		this.updateStateEntity<number>('currentPage', currentPage);
	}

	private static parseToProjectsWithDates(projects: Project[]): Project[] {
		return projects.map((project) => ({ ...project, createdAt: new Date(project.createdAt), updatedAt: new Date(project.updatedAt) }));
	}

	private static sortByDateDesc(projects: Project[]): Project[] {
		return projects.sort((previous, current) => current.createdAt.getTime() - previous.createdAt.getTime());
	}
}

// // @todo - this should be part of a formal DI system
export const projectsFacade = new ProjectsFacade(projectsService, projectsStore, projectsQuery);
