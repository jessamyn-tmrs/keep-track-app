import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
    // const { projects } = props
    return (
        <div className='row'>
            {projects.map((project) => (
                <div key={project.id} className='card'>
                    <ProjectCard project={project} />
                </div>
            ))}
        </div>
    )
}

export default ProjectList