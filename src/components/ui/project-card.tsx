import * as React from "react";
import type { ProjectItem } from "@/types/projects";
import ActionButton from "./action-button";

interface ProjectCardProps {
    project: ProjectItem;
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="group flex flex-col bg-white border border-gray-200 shadow-sm rounded-md p-5">
            {project.date && (
                <p className="text-sm font-medium text-fuchsia-500">{project.date}</p>
            )}

            <p className="mt-1 font-bold text-lg md:text-xl text-gray-800">{project.name}</p>
            <p className="mt-2 text-base text-gray-700">{project.description}</p>

            {project.actions && (
                <div className="mt-2 flex gap-x-2">
                    {project.actions.map((action, index) => (
                        <ActionButton
                            key={index}
                            text={action.text}
                            link={action.link}
                            color={action.color}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default ProjectCard