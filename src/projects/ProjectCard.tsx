import { Project } from './Project';

const formatDescription = (text: string): string => {
    return text.substring(0, 60) + '...';
}

interface ProjectCardProps {
    project: Project;
    onEdit: (project: Project) => void;
}

const ProjectCard = ({ project, onEdit }: ProjectCardProps) => {
    const handleEditClick = (projectBeingEdited: Project) => {
        onEdit(projectBeingEdited);
    }
    return (
        <div>
            <div key={project.id} className='card'>
                <img src={project.imageUrl} alt={project.name}></img>
                <section className="section dark">
                    <h5 className="strong">
                        <strong>{project.name}</strong>
                    </h5>
                    <p>{formatDescription(project.description)}</p>
                    <p>Budget : {project.budget.toLocaleString()}</p>
                    <button className="bordered"
                        onClick={() => { handleEditClick(project) }}>
                        <span className="icon-edit "></span>
                        Edit
                    </button>
                </section>
            </div>
        </div>
    )
}

export default ProjectCard