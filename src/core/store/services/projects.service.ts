import { ApiService } from './api.service';
import { Project } from '../../../models/Project.model';
import { CreateProjectData } from '../../../views/CreateProject';
import { BaseResponseData } from '../../base/models/baseResponseData';

export interface ProjectsResponseData extends BaseResponseData<Project[]> {}

export class ProjectsService {
	private apiService: ApiService;

	constructor() {
		this.apiService = new ApiService();
	}

	getProjects(): Promise<ProjectsResponseData> {
		return this.apiService.get<ProjectsResponseData>('project/all');
	}

	createProject(projectData: CreateProjectData): Promise<never> {
		return this.apiService.post<never>('project/new', { body: { ...projectData } });
	}

	takeProject(projectId: string): Promise<never> {
		return this.apiService.post<never>('project/take', { params: { projId: projectId } });
	}
}

export const projectsService = new ProjectsService();
