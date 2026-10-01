import { GoArrowUpRight, GoArrowRight } from "react-icons/go"
import { useTranslation } from "react-i18next"
import FadeUp from "../Animation/FadeUp"

interface Project {
  id: number
  title: string
  img: string
  caption: string
  techStack: string[]
  github: string
  liveDemo: string
}

function ProjectsCards() {
  const { t } = useTranslation()
  const projects = t('projects.items', { returnObjects: true }) as unknown as Project[]

  return (
    <FadeUp>
      <div className="Projects-Container">
        {projects.map((project) => (
          <div key={project.id} className="Project-card">
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="Project-Content">
              <h2 className="Title">{project.title}</h2>
              <p>{project.caption}</p>
              <ul className="tech-stack">
                {project.techStack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="Project-Links">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo <GoArrowUpRight />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub <GoArrowRight />
              </a>
            </div>
          </div>
        ))}
      </div>
    </FadeUp>
  )
}

export default ProjectsCards