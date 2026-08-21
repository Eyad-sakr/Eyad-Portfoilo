 import { GoArrowUpRight } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import FadeUp from "../FadeUp";

 interface Project {
    id:number;
  title: string;
  img:string;
  caption: string;
  techStack: string[];
  github: string;
  liveDemo: string;
}

const projects: Project[] = [
  {
    id:1,
    title: "NOX E-commerce",
    img:'/nox-e-commerce.png',
    caption:
  "A responsive e-commerce platform that simplifies product discovery and online shopping. It provides an intuitive experience for browsing, filtering, and managing products."
  ,    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "React Router",
    ],
    github:
      "https://github.com/Eyad-sakr/NOX-E-commerce.git",
    liveDemo:
      "https://nox-e-commerce-three.vercel.app/",
  },

  {
    id:2,
    title: "NOX Admin Dashboard",
    img:'/nox-admin-dashboard.png',
    caption:
  "A responsive admin dashboard that simplifies business data management and monitoring. It provides clear insights into customers, orders, products, and overall performance.",      techStack: [
      "React",
      "TypeScript",
      "Vite",
      "CSS",
      "Recharts",
    ],
    github:
      "https://github.com/Eyad-sakr/Nox-admin-dashboard.git",
    liveDemo: "https://nox-admin-dashboard.vercel.app/",
  },
];

function ProjectsCards() {
  return (
    <FadeUp>
    <div className="Projects-Container">
        {projects.map(project=>(
            <div key={project.id} className="Project-card">
                <div className="project-img">
                  <img src={project.img} alt="Nox image" />
                </div>
                <div className="Project-Content">
                  <h2 className="Title">{project.title}</h2>
                  <p>{project.caption}</p>
                  <ul className="tech-stack">
                    {project.techStack.map(tech=>(
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                 <div className="Project-Links">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo <GoArrowUpRight/></a>
                  <a href={project.github}  target="_blank" rel="noopener noreferrer">GitHub <GoArrowRight/> </a>
                </div>
            </div>
        ))}
    </div>
    </FadeUp>
  )
}

export default ProjectsCards