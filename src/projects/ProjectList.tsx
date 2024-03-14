import { Project } from './Project';

interface ProjectListProps {
    projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {

    return (
        <pre>{JSON.stringify(projects, null, ' ')}</pre>

    )
}

export default ProjectList