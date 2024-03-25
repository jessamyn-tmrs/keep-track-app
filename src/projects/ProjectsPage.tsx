import React, { Fragment, useState } from 'react';
import { MOCK_PROJECTS } from './MockProjects';
import { Project } from './Project';
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const saveProject = (project: Project) => {
        let updatedProject = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProject);
    };
    return (
        <Fragment>
            <h1>Projects</h1>
            <ProjectList
                onSave={saveProject}
                projects={projects} />
        </Fragment>

    )
}

export default ProjectsPage;