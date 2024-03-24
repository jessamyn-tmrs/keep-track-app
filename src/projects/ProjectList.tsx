import { useState } from 'react';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = (props: ProjectListProps) => {
    const { projects } = props;
    const [projectBeingEdited, setProjectBeingEdited] = useState({});
    const handleEdit = (project: Project) => {
        setProjectBeingEdited(project);
    };
    const cancelEditing = () => {
        setProjectBeingEdited({});
    }
    return (
        <div className='row'>
            {projects.map((project) => (
                <div key={project.id} className='card'>
                    {project === projectBeingEdited ? (
                        <ProjectForm
                            onCancel={cancelEditing} />
                    ) : (
                        <ProjectCard project={project} onEdit={handleEdit} />
                    )}
                </div>
            ))}
        </div>
    )
}

export default ProjectList