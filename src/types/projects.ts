import { ActionButtonField } from "./action";

export interface ProjectItem {
    name: string;
    description: string;
    date?: string;
    actions?: ActionButtonField[];
}

export interface ProjectContent {
    projects: ProjectItem[];
}