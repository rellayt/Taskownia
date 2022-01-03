export enum ProjectStatus {
	NEW = 'NEW',
	IN_PROGRESS = 'IN_PROGRESS',
	FINISHED = 'FINISHED',
}

export interface Project {
	id: number;
	title: string;
	description: string;
	authorId: number;
	authorUsername: string;
	projectStatus: ProjectStatus;
	createdAt: Date;
	updatedAt: Date;
}
