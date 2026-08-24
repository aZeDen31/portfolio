import { useState, useEffect } from 'react'
import heroImg from '../assets/Selfie.jpg'
import cvPDF from '../assets/CV Lucas Gosselin.pdf'
import { projectsData } from '../data/projects.js'

import Header from '../components/header'
import Project from './Project'
import Footer from '../components/footer'

import "../CSS/style.css"

function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (!selectedProject && window.location.hash) {
      const timer = setTimeout(() => {
        const id = window.location.hash.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [selectedProject]);

  if (selectedProject) {
    return (
      <Project
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    )
  }

  return (
    <>
      <Header />
      <main>
        <div className="hero-section">
          <img src={heroImg} alt="Photo Lucas Gosselin" className="hero-image" />
          <div id="about-me">
            <h1>Lucas Gosselin</h1>
            <p>Étudiant en deuxième année de développement informatique, je m'intéresse à la conception d'applications web et de jeux sous Unity. J'aime comprendre comment les choses fonctionnent en profondeur et transformer des idées en solutions concrètes à travers le code. Curieux et rigoureux, je cherche constamment à améliorer mes compétences et à relever de nouveaux défis techniques.</p>
            <a href={cvPDF} className="bouton-cv" target="_blank" style={{ color: 'white' }}>Mon CV</a>
          </div>
        </div>

        <div id="projets">
          <h1>Mes Projets</h1>
          <div className="projects-grid">
            {projectsData.map(project => (
              <div key={project.id} className="projectCard">
                <img src={project.smallImg} alt={project.name} />
                <h2>{project.name}</h2>
                <p>{project.descriptionCourte}</p>
                <div className="tech-badges">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="btn-view-project"
                >
                  Voir le projet
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
