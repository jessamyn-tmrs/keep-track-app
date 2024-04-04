import { Fragment, useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { Project } from './Project';
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const saveProject = (project: Project) => {
        let updatedProject = projects.map((p: Project) => {
            return p.id === project.id ? project : p;
        });
        setProjects(updatedProject);
    };

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(1);
                setError('');
                setProjects(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, [])


    return (
        <Fragment>
            <h1>Projects</h1>
            {error && (
                <div className="row">
                    <div className="card large error">
                        <section>
                            <p>
                                <span className="icon-alert inverse "></span>
                                {error}
                            </p>
                        </section>
                    </div>
                </div>
            )}
            <ProjectList
                onSave={saveProject}
                projects={projects} />
            {loading && (<div className='center-page'>
                <span className='spinner primary'>
                </span>
                <p>Loading...</p>
            </div>)}
        </Fragment>

    )
}

export default ProjectsPage;