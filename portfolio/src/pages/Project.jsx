import Header from '../components/header'

function Project({ project, onBack }) {
    if (!project) return null;

    const fullDescription = project.description || project.descriptionCourte;

    return (
        <>
            <Header onNavigate={onBack} />
            <main className="project-detail-main">
                <button onClick={onBack} className="btn-back">
                    &larr; Retour aux projets
                </button>
                <div className="project-detail-content">
                    <h1>{project.name}</h1>

                    {project.video ? (
                        <div className="project-video-container">
                            {typeof project.video === 'string' && (project.video.includes('youtube.com') || project.video.includes('youtu.be')) ? (
                                <iframe
                                    src={project.video}
                                    title={`Vidéo de démonstration de ${project.name}`}
                                    className="project-detail-iframe"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <video
                                    src={project.video}
                                    controls
                                    className="project-detail-video"
                                    poster={project.mainImg}
                                />
                            )}
                        </div>
                    ) : (
                        project.mainImg && (
                            <img src={project.mainImg} alt={project.name} className="project-detail-img" />
                        )
                    )}

                    <p className="project-detail-description">
                        {fullDescription}
                    </p>

                    <div className="tech-badges">
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    {project.lien && (
                        <div style={{ marginTop: '20px' }}>
                            <a href={project.lien} target="_blank" rel="noopener noreferrer" className="btn-project-link">
                                Voir sur GitHub
                            </a>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}

export default Project;