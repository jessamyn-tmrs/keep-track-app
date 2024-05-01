import { Fragment, useState, useEffect } from 'react';
import { projectAPI } from './projectAPI';
import { Project } from './Project';
import ProjectList from "./ProjectList";

const ProjectsPage = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const saveProject = (project: Project) => {
        projectAPI
            .put(project)
            .then((updatedProject) => {
                let updatedProjects = projects.map((p: Project) => {
                    return p.id === project.id ? new Project(updatedProject) : p;
                });
                setProjects(updatedProjects);
            })
            .catch((error) => {
                if (error instanceof Error) {
                    setError(error.message);
                }
            })
    };

    useEffect(() => {
        async function loadProjects() {
            setLoading(true);
            try {
                const data = await projectAPI.get(currentPage);
                setError('');
                // setProjects(data);
                if (currentPage === 1) {
                    setProjects(data);
                } else {
                    setProjects((projects) => [...projects, ...data]);
                }
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, [currentPage])

    const handleMoreClick = () => {
        setCurrentPage((currentPage) => currentPage + 1);
    };

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
            {!loading && !error && (
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='button-group fluid'>
                            <button className='button default' onClick={handleMoreClick}>
                                More...
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {loading && (<div className='center-page'>
                <span className='spinner primary'>
                </span>
                <p>Loading...</p>
            </div>)}
        </Fragment>

    )
}

export default ProjectsPage;