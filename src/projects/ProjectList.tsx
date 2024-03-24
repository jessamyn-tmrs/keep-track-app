import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = (props: ProjectListProps) => {
    const { projects } = props;
    const handleEdit = (project: Project) => {
        console.log(project)
    };
    return (
        <div className='row'>
            {projects.map((project) => (
                <div key={project.id} className='card'>
                    <ProjectCard
                        project={project}
                        onEdit={handleEdit}
                    ></ProjectCard>
                    <ProjectForm></ProjectForm>
                </div>
            ))}
        </div>
    )
}

export default ProjectList