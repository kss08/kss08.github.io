export interface ProjectItem {
    name: string;
    description: string;
    additional_description?: string;
    date?: string;
}

export interface ProjectContent {
    projects: ProjectItem[];
}